import jwt from "jsonwebtoken";
import UserModel from "../Model/UserModel.js";
import TurfModel from "../Model/TurfModel.js";
import bookingModel from "../Model/BookingModel.js";

//admin credentials
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email === adminEmail && password === adminPassword) {
      const token = jwt.sign({ id: email }, process.env.JWT_SECRET);
      return res.status(200).json(token);
    } else return res.status(403).json({ message: "invalid credentials" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRequestedTurf = async (req, res) => {
  try {
    const admin = req.user.id;
    if (adminEmail === admin) {
      const turfs = await TurfModel.find({ turfStatus: false });
      if (turfs.length === 0)
        return res.status(404).json({ message: "No turfs found" });
      res.status(200).json(turfs);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const toAcceptTurfRequest = async (req, res) => {
  const admin = req?.user?.id;
  try {
    if (adminEmail === admin) {
      const ID = req.body.ID;
      const turf = await TurfModel.findByIdAndUpdate(ID, {
        turfStatus: true,
      });
      console.log(turf);
      res.status(200).json(turf.turfStatus);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const toCancelTurfRequest = async (req, res) => {
  const admin = req.user.id;
  try {
    if (adminEmail === admin) {
      const ID = req.body.id;
      await TurfModel.findByIdAndDelete(ID);
      res.status(200).json({ message: "cancelled" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const toViewUserList = async (req, res) => {
  const admin = req.user.id;
  try {
    if (adminEmail === admin) {
      const Users = await UserModel.find();
      if (Users.length === 0)
        return res.status(404).json({ message: "No users found" });
      return res.status(200).json(Users);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const toGetAllTurfs = async (req, res) => {
  const admin = req.user.id;
  try {
    if (adminEmail === admin) {
      const turfs = await TurfModel.find({ turfStatus: true });
      if (turfs.length === 0)
        return res.status(404).json({ message: "Turfs not found" });
      res.status(200).json(turfs);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const toViewReports = async (req, res) => {
  const admin = req.user.id;
  try {
    if (adminEmail === admin) {
      const report = await bookingModel.aggregate([
        { $match: { payment: "Success" } },
        {
          $lookup: {
            from: "turfs",
            localField: "turf",
            foreignField: "_id",
            as: "turf",
          },
        },
        {
          $group: {
            _id: "$turf._id",
            name: { $first: "$turf.turfName" },
            totalPrice: { $sum: "$price" },
            count: { $sum: 1 },
          },
        },
        { $sort: { totalPrice: 1 } },
      ]);
      res.status(200).json(report);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const toGetTheTotalCounts = async (req, res) => {
  try {
    const [userCount, turfCount, bookingCount] = await Promise.all([
      UserModel.find().count(),
      TurfModel.find({ turfStatus: true }).count(),
      bookingModel.find({ payment: "Success" }).count(),
    ]);
    console.log(userCount)
    res.status(200).json({ userCount, turfCount, bookingCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
