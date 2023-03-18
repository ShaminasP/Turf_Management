import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import AdminSlice from "./AdminSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    admin: AdminSlice,

  },
});

export default store;
