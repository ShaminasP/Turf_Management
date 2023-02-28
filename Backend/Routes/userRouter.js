import express from "express";
import { signUp, checkOtp, login } from "../Controller/UserController.js";
const router = express.Router();

router.post("/signup", signUp);

router.post("/otp", checkOtp);

router.post("/login", login);

export default router;
