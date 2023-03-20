import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    name: null,
    search: [],
    turf: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    setTurfSearch: (state, action) => {
      state.search = action.payload;
    },
    setTurf: (state, action) => {
      state.turf = action.payload;
    },
    resetToken: (state) => {
      state.token = null;
      state.name = null;
    },
  },
});

export const { setToken, resetToken, setTurfSearch, setTurf } =
  userSlice.actions;
export default userSlice.reducer;
