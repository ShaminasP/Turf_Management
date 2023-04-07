import express from "express";

const router = express.Router();
import {
  adminLogin,
  getRequestedTurf,
  toGetAllTurfs,
  toAcceptTurfRequest,
  toViewUserList,
  toCancelTurfRequest,
  toViewReports
} from "../Controller/AdminController.js";

import { authVerify } from "../Helpers/jwt.js";

router.post("/", adminLogin);

router.get("/", authVerify, getRequestedTurf);

router.patch("/status",  toAcceptTurfRequest);

router.delete("/status", authVerify, toCancelTurfRequest);

router.get("/turfs", authVerify, toGetAllTurfs);

router.get("/users", authVerify, toViewUserList);

router.get('/reports', authVerify, toViewReports)

export default router;
