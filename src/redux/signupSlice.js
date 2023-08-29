import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    message: "",
    pending: false,
    error: false,
    authorized:false,
  },
  reducers: {
    startUpdate: (state) => {
      state.pending = true;
    },
    startSuccess: (state) => {
      state.pending = false;
      state.authorized = true
      state.error = false
      
    },
    startError: (state, action) => {
      state.pending = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});

export const { startUpdate, startSuccess, startError } = signupSlice.actions;
export default signupSlice.reducer;
