import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    name: null,

  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    resetToken: (state) => {
      state.token = null;
      state.name = null;
    },
  },
});

export const { setToken, resetToken } = userSlice.actions;
export default userSlice.reducer;
