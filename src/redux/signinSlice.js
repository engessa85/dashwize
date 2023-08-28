import { createSlice } from "@reduxjs/toolkit";

const signinSlice = createSlice({
  name: "signin",
  initialState: {
    email:"",
    pending: false,
    error: false,
  },
  reducers: {
    startUpdate: (state) => {
      state.pending = true;
      state.error = false;
    },
    startSuccess: (state, action) => {
      state.pending = false;
      state.email = action.payload.email
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("refreshtoken", action.payload.res.refresh);
      localStorage.setItem("accesstoken", action.payload.res.access);
      
      
    },
    startError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { startUpdate, startSuccess, startError } = signinSlice.actions;
export default signinSlice.reducer;
