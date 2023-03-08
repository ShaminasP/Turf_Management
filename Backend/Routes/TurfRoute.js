import express from "express";
const router = express.Router();
import { turf_register, turf_login,toViewTurfs } from "../Controller/TurfController.js";
import upload from "../Helpers/multer.js";

router.post("/register", upload.single("image"), turf_register);

router.post("/login", turf_login);

router.get('/viewturfs',toViewTurfs);

export default router;
