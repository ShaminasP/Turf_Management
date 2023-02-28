import express from "express";
const router = express.Router();
import { turf_register ,turf_login} from "../Controller/TurfController.js";

router.post("/register", turf_register);

router.post('/login',turf_login);

export default router;
