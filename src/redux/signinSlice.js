import { createSlice } from "@reduxjs/toolkit";

const signinSlice = createSlice({
  name: "signin",
  initialState: {
    token: {
      refresh: localStorage.getItem("refreshtoken"),
      access: localStorage.getItem("accesstoken"),
    },
    pending: false,
    error: false,
  },
  reducers: {
    startUpdate: (state) => {
      state.pending = true;
    },
    startSuccess: (state, action) => {
      state.pending = false;
      state.token = action.payload;
      localStorage.setItem("refreshtoken", state.token.refresh);
      localStorage.setItem("accesstoken", state.token.access);
    },
    startError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {startUpdate, startSuccess, startError} = signinSlice.actions;
export default signinSlice.reducer;
