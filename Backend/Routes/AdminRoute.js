import express from "express";

const router = express.Router();
import {
  adminLogin,
  getRequestedTurf,
  toGetAllTurfs,
  toAcceptTurfRequest,
  toViewUserList,
  toCancelTurfRequest,
} from "../Controller/AdminController.js";

import { authVerify } from "../Helpers/jwt.js";

router.post("/", adminLogin);

router.get("/", authVerify, getRequestedTurf);

router.patch("/status", authVerify, toAcceptTurfRequest);

router.delete("/status", authVerify, toCancelTurfRequest);

router.get("/turfs", authVerify, toGetAllTurfs);

router.get("/users", authVerify, toViewUserList);

export default router;
