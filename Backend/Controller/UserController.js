import UserModel from "../Model/UserModel.js";
import TurfModel from "../Model/TurfModel.js";
import BookingModel from "../Model/BookingModel.js";
import { paymentStripe } from "../Helpers/Stripe.js";
import { sendSms, veryfySms } from "../Helpers/Twilio.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bookingModel from "../Model/BookingModel.js";
dotenv.config();
export const signUp = async (req, res) => {
  try {
    const { email, mobile } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) return res.status(409).json({ message: "User already exists" });
    const userMobile = await UserModel.findOne({ mobile: mobile });
    if (userMobile)
      return res
        .status(409)
        .json({ message: "This number is alredy registered" });

    sendSms(mobile);
    return res.status(200).json({ message: `OTP sent to ${mobile}` });
  } catch (error) {
    res.status(500).json(error?.response?.data?.message);
    console.log(error);
  }
};

export const checkOtp = (req, res) => {
  const { name, email, mobile, password, otp } = req.body;

  try {
    veryfySms(mobile, otp).then(async (response) => {
      if (!response) return res.status(401).json({ message: "Invalid OTP " });
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new UserModel({
        name,
        email,
        mobile,
        password: hashedPassword,
        role: "User",
      });
      newUser.save();
    });
    return res.status(200).json({ message: "User saved successfully" });
  } catch (error) {
    res.status(500).json(error?.response?.data?.message);
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.status(401).json({ message: "Invalid email" });
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) return res.status(401).json({ message: "Invalid password" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const name = user.name;
    const role = user.role;
    res.status(200).json({ token, name, role });
  } catch (error) {
    res.status(500).json(error?.response?.data?.message);
    console.log(error);
  }
};

export const toGetTurfByLocation = async (req, res) => {
  try {
    const turfs = await TurfModel.find({ location: req.params.data });
    if (turfs.length === 0)
      return res.status(404).json({ message: "no turfs found" });
    res.status(200).json(turfs);
  } catch (error) {
    res.status(500).json(error?.response?.data?.message);
    console.log(error.message);
  }
};

export const togetBookingslots = async (req, res) => {
  const ID = req?.query?.ID;
  console.log(ID, "ID");
  let date = req?.query?.date;
  const bookDate = new Date(date);
  bookDate.setHours(0);
  bookDate.setMinutes(0);
  bookDate.setSeconds(0);
  bookDate.setMilliseconds(0);
  try {
    const Booking = await BookingModel.find({ turf: ID, bookDate });
    return res.status(200).json(Booking);
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data?.message);
  }
};

export const toBookTurf = async (req, res) => {
  try {
    const { turfID, date, time } = req.body;
    const turf = await TurfModel.findById(turfID);
    const price = turf?.fee;
    const userId = req.user.id;
    const bookDate = new Date(date);
    bookDate.setHours(0);
    bookDate.setMinutes(0);
    bookDate.setSeconds(0);
    bookDate.setMilliseconds(0);
    const newBooking = await bookingModel.create({
      user: userId,
      turf: turfID,
      bookDate,
      time,
      price,
    });

    res.status(200).json(newBooking);
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data?.message);
  }
};

export const toProceedPayment = async (req, res) => {
  try {
    const bookingId = req.query.bookingId;
    const result = await bookingModel
      .findById(bookingId)
      .populate("user")
      .populate("turf");

    const response = await paymentStripe(
      result?.turf.fee,
      result?.turf.turfName,
      result?.user.email,
      bookingId
    );
    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data?.message);
  }
};

export const bookingSuccess = async (req, res) => {
  const ID = req.body.id;
  try {
    const result = await bookingModel
      .findById(ID)
      .populate("user")
      .populate("turf");
    if (result) {
      await bookingModel.findByIdAndUpdate(ID, { payment: "Success" });
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data);
  }
};

export const toViewProfile = async (req, res) => {
  try {
    const ID = req.user.id;
    const user = await UserModel.findById(ID, { __v: 0 });
    if (!user) return res.status(401).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data);
  }
};

export const toUpdateProfile = async (req, res) => {
  try {
    const ID = req.user.id;
    console.log(ID);
    const { name, email, mobile } = req?.body?.data;
    if (!name || !email || !mobile)
      return res.status(401).json({ message: "field not found" });
    const User = await UserModel.findByIdAndUpdate(ID, { name, email, mobile });
    console.log(User);
    if (!User) return res.status(401).json({ message: "User not found" });
    console.log("NILL");
    res.status(200).json(User);
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data);
  }
};

export const toViewBookingDetails = async (req, res) => {
  try {
    const date = new Date();
    const user = req.user.id;
    const bookings = await bookingModel.find({ user }).populate("turf");
    const UpcomingBookings = await bookingModel
      .find({ user, bookDate: { $gt: date } })
      .populate("turf");
    console.log(UpcomingBookings);
    res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data);
  }
};
