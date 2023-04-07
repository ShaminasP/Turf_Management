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
  turfAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  turfStatus: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },

  openingHour: {
    type: String,
    // required: true,
  },
  closingHour: {
    type: String,
    // required: true,
  },

  bookingStatus: {
    type: Boolean,
  },
  images: {
    type: Array,
  },
  fee: {
    type: Number,
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
  balance: {
    type: String,
  },
});

const TurfModel = new mongoose.model("Turfs", turfSchema);
export default TurfModel;
