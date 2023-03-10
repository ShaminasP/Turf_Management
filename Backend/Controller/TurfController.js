import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import TurfModel from "../Model/TurfModel.js";

export const turf_register = async (req, res) => {
  const {
    turfName,
    email,
    place,
    district,
    state,
    mobile,
    openingHours,
    closingHours,
    fee,
    password,
  } = req.body;

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newTurf = new TurfModel({
      turfName,
      email,
      password: hashedPassword,
      location: [{ district, state, place }],
      contactNumber: mobile,
      workingHours: [{ openingHours, closingHours }],
      fee,
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
