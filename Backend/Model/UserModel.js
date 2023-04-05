import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    // min: 6,
  },
  role:{
    type: String,
    required: true,
  },
  profile:{
    type:Array,
  }
});
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
