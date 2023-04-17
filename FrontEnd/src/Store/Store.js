import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import AdminSlice from "./AdminSlice";
import TurfSlice from "./TurfSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    admin: AdminSlice,
    turf:TurfSlice

  },
});

export default store;
