import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRouter from "./Routes/userRouter.js";
import turfRoute from "./Routes/TurfRoute.js";
import adminRoute from "./Routes/AdminRoute.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MongoUrl, () =>
  console.log("Connected to Mongoose")
);


const corsOptions = {
  origin: 'http://localhost:1234',
  methods: 'GET,POST,PATCH,PUT,DELETE', 
  preflightContinue: true,
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));



app.use("/", userRouter);
app.use("/turf", turfRoute);
app.use("/admin", adminRoute);
app.listen(3001, () => {
  console.log("Running on port 3001");
});
