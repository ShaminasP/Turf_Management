import express from "express";
import upload from "../Helpers/multer.js";

import { authVerify } from "../Helpers/jwt.js";
const router = express.Router();
import {
  turf_register,
  // turf_login,
  toGetTurf,
  toUpdateTufDetails,
} from "../Controller/TurfController.js";



router.post("/register", authVerify, upload.array("image", 4), turf_register);

// router.post("/login", turf_login);

router.get("/viewturfowner", authVerify, toGetTurf);

router.put("/update", toUpdateTufDetails);

export default router;
