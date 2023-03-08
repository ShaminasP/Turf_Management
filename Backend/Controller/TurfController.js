import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import TurfModel from "../Model/TurfModel.js";

export const turf_register = async (req, res) => {
  const {
    name,
    email,
   location,
    mobile,
    password,
  } = req.body;
  console.log(req.body);
  const img = req.file.location;
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const newTurf = new TurfModel({
      turfName: name,
      email,
      password: hashedPassword,
      location: location,
      contactNumber: mobile,
      images: img,
    });

    await newTurf.save();

    res.status(200).json({ message: "Turf registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to register turf" });
  }
};

export const turf_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const turf = await TurfModel.findOne({ email: email });
    if (!turf) {
      return res
        .status(404)
        .json({ message: "Turf is not registered with this email" });
    }
    const isPasswordMatch = await bcrypt.compare(password, turf.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ email: turf.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const toViewTurfs = async (req, res) => {
  try {
    await TurfModel.find()
      .then((turfs) =>{
        res.status(200).json({turfs})})
      .catch((err) => {
        err.message;
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
