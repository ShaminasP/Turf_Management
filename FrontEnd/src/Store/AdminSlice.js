import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    token: null,

  },
  reducers: {
    setAdmin: (state, action) => {
      state.token = action.payload;
    },
    resetAdmin: (state) => {
      state.token = null;
    },
  },
});

export const { setAdmin, resetAdmin } = adminSlice.actions;
export default adminSlice.reducer;
