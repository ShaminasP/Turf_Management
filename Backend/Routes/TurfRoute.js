import express from "express";
import { authVerify } from "../Helpers/jwt.js";
const router = express.Router();
import {
  turf_register,
  // turf_login,
  toGetTurf,
} from "../Controller/TurfController.js";
import upload from "../Helpers/multer.js";

router.post("/register", authVerify, upload.array("image",4), turf_register);

// router.post("/login", turf_login);

router.get("/viewturfowner", authVerify, toGetTurf);

export default router;
