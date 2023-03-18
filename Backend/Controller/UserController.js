import UserModel from "../Model/UserModel.js";
import TurfModel from "../Model/TurfModel.js";
import { sendSms, veryfySms } from "../Helpers/Twilio.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
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
    res.status(500).json(error?.response?.data?.message)
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
        password: hashedPassword,
        mobile,
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
    console.log(token);
    const name = user.name;
    res.json({ token, name });
  } catch (error) {
    res.status(500).json(error?.response?.data?.message)
    console.log(error);
  }
};

export const toGetTurfByLocation = async (req, res) => {
  try {
    console.log(req.params.data);
    const turfs = await TurfModel.find({ location: req.params.data });
    if (turfs.length === 0)
      return res.status(404).json({ message: "no turfs found" });
    res.status(200).json(turfs);
  } catch (error) {
    res.status(500).json(error?.response?.data?.message);
    console.log(error.message);
  }
};
