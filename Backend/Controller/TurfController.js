import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import TurfModel from "../Model/TurfModel.js";
import UserModel from "../Model/UserModel.js";
import bookingModel from "../Model/BookingModel.js";

export const turf_register = async (req, res) => {
  const { name, email, location, mobile } = req.body;
  if (!name || !email || !location || !mobile) {
    res.status(401).json({ message: "fields cannot be blank" });
  }
  const registered = await TurfModel.findOne({ email: email });
  if (registered)
    res
      .status(400)
      .json({ message: "Turf is already registered with this email" });

  const turfAdmin = req?.user?.id;
  if (!turfAdmin) return res.status(204).json({ message: "Please login" });

  const img = req?.files;
  try {
    const newTurf = new TurfModel({
      turfName: name,
      email,
      location,
      contactNumber: mobile,
      images: img,
      turfAdmin: req?.user?.id,
    });

    await newTurf.save();

    await UserModel.findByIdAndUpdate(req?.user?.id, { role: "turfAdmin" });

    res.status(200).json({ message: "Turf registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json(error?.response?.data?.message);
  }
};

export const toViewTurfs = async (req, res) => {
  try {
    const turfs = await TurfModel.find({ turfStatus: true });
    res.status(200).json({ turfs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

export const toViewTurf = async (req, res) => {
  try {
    const ID = req.params.id;
    const turf = await TurfModel.findById(ID);
    res.status(200).json({ turf });
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data?.message);
  }
};

export const toGetTurf = async (req, res) => {
  try {
    const ID = req.user.id;
    const turf = await TurfModel.findOne({ turfAdmin: ID });
    res.status(200).json({ turf });
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data?.message);
  }
};

export const toUpdateTufDetails = async (req, res) => {
  try {
    const {
      _id,
      turfName,
      email,
      location,
      contactNumber,
      closingHour,
      openingHour,
      fee,
    } = req.body.data;
    const updateDataturf = await TurfModel.findByIdAndUpdate(_id, {
      contactNumber: contactNumber,
      openingHour: openingHour.toString(),
      closingHour: closingHour.toString(),
      fee: fee.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data?.message);
  }
};

export const toGetBooking = async (req, res) => {
  try {
    const turfAdmin = req.user.id;
    const turf = await TurfModel.findOne({ turfAdmin });
    if (!turf) return res.status(404).json({ message: "invalid" });
    const turfId = turf?._id;
    const bookings = await bookingModel.find({ turf: turfId }).populate("user");
    res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data);
  }
};

export const toGetBookingReport = async (req, res) => {
  try {
    const turfAdmin = req.user.id;
    const turf = await TurfModel.findOne({ turfAdmin });
    if (!turf) return res.status(404).json({ message: "invalid" });
    const ID = turf._id;

    const bookings = await bookingModel.aggregate([
      {
        $match: {
          turf: ID,
          payment: "Success",
        },
      },
      {
        $group: {
          _id: "$bookDate",
          totalPrice: { $sum: "$price" },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data);
  }
};

export const toGetCounts = async (req, res) => {
  try {
    const turfAdmin = req?.user?.id;
    const Turf = await TurfModel.findOne({ turfAdmin });
    if (!Turf) return res.status(400).json({ message: "No turf found" });
    const turf = Turf?._id;
    const bookingCount = await bookingModel
      .findOne({ turf, payment: "Success" })
      .count();
    const userCount = await bookingModel.find({ turf }).distinct("user");
    res.status(200).json({ bookingCount, userCount: userCount?.length });
  } catch (error) {
    res.status(500).json(error?.response?.data);
  }
};
