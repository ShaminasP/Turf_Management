import express from "express";
import upload from "../Helpers/multer.js";

import { authVerify } from "../Helpers/jwt.js";
const router = express.Router();
import {
  turf_register,
  toGetBooking,
  toGetTurf,
  toUpdateTufDetails,
} from "../Controller/TurfController.js";



router.post("/register", authVerify, upload.array("image", 4), turf_register);


router.get("/viewturfowner", authVerify, toGetTurf);

router.put("/update",authVerify,   toUpdateTufDetails);

router.get('/booking',authVerify, toGetBooking);

export default router;
