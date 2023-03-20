import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authVerify = (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);
  if (!token) return res.status(401).json({ message: "Please Login" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log(req.user);
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};
