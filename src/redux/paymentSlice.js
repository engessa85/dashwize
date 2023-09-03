import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    pending: false,
    payed_ceo: false,
    payed_cto: false,
    error: false,
  },
  reducers: {
    startUpdate: (state) => {
      state.pending = true;
    },
    startSuccess: (state, actions) => {
      state.pending = false;
      state.payed_ceo = actions.payload.payed_ceo;
      state.payed_cto = actions.payload.payed_cto;
    },
    startError: (state) => {
      state.pending = false;
      state.error = true;
    },
    resetError:(state)=> {
      state.error = false
    }
  },
});

export const { startUpdate, startSuccess, startError, resetError } = paymentSlice.actions;
export default paymentSlice.reducer;
