import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    token: null,
    name: null,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    resetAdmin: (state) => {
      state.name = null;
      state.token = null;
    },
  },
});

export const { setAdmin, resetAdmin } = adminSlice.actions;
export default adminSlice.reducer;
