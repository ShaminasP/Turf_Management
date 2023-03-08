import mongoose from "mongoose";

const turfSchema = new mongoose.Schema({
  turfName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // location: [
  //   {
  //     place: {
  //       type: String,
  //       required: true,
  //     },
  //     district: {
  //       type: String,
  //       required: true,
  //     },
  //     state: {
  //       type: String,
  //       // required: true,
  //     },
  //   },
  // ],
  location: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  workingHours: [
    {
      openingHours: {
        type: String,
        // required: true,
      },
      closingHours: {
        type: String,
        // required: true,
      },
    },
  ],
  bookingStatus: {
    type: Boolean,
  },
  images: {
    type: Array,
  },
  fee: {
    type: String,
    // required: true,
  },
  events: {
    eventName: {
      type: String,
    },
    eventStatus: {
      type: Boolean,
    },
  },
});

const TurfModel = new mongoose.model("Turfs", turfSchema);
export default TurfModel;
