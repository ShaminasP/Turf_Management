import { createSlice } from "@reduxjs/toolkit";

const turfSlice = createSlice({
  name: "turf",
  initialState: {
    token: null,
    name: null,
  },
  reducers: {
    setTurfAdmin: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    resetTurfAdmin: (state) => {
      (state.token = null), (state.name = null);
    },
  },
});

export const { setTurfAdmin, resetTurfAdmin } = turfSlice.actions;
export default turfSlice.reducer;
