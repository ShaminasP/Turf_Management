import express from "express";
import {authVerify} from '../Helpers/jwt.js';
import {
  signUp,
  checkOtp,
  login,
  toGetTurfByLocation,
  toBookTurf
} from "../Controller/UserController.js";

import { toViewTurfs, toViewTurf } from "../Controller/TurfController.js";


const router = express.Router();

router.post("/signup", signUp);

router.post("/otp", checkOtp);

router.post("/login", login);

router.get("/viewturfs", toViewTurfs);

router.get("/viewturf/:id", toViewTurf);

router.get("/turfbylocation/:data", toGetTurfByLocation);

router.post("/booking",authVerify, toBookTurf);

export default router;
