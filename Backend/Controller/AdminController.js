import jwt from "jsonwebtoken";
import UserModel from "../Model/UserModel.js";
import TurfModel from "../Model/TurfModel.js";
export const adminLogin = async (req, res) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
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
    const turfs = await TurfModel.find({ turfStatus: false });
    if (turfs.length === 0)
      return res.status(404).json({ message: "No turfs found" });
    res.status(200).json(turfs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const toAcceptTurfRequest = async (req, res) => {
  try {
    console.log(req.body);
    const ID = req.body.ID;
    console.log(ID);
    const turf = await TurfModel.findByIdAndUpdate(ID, {
      turfStatus: true,
    });
    console.log(turf);
    res.status(200).json(turf.turfStatus);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const toCancelTurfRequest = async (req, res) => {
  const ID = req.body.id;
  await TurfModel.findByIdAndDelete(ID);
  res.status(200).json({ message: "cancelled" });
};

export const toViewUserList = async (req, res) => {
  try {
    const Users = await UserModel.find();
    if (Users.length === 0)
      return res.status(404).json({ message: "No users found" });
    return res.status(200).json(Users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const toGetAllTurfs = async (req, res) => {
  try {
    const turfs = await TurfModel.find({ turfStatus: true });
    if (turfs.length === 0)
      return res.status(404).json({ message: "Turfs not found" });
    res.status(200).json(turfs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
