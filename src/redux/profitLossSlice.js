import { createSlice } from "@reduxjs/toolkit";

const profitlossSlice = createSlice({
  name: "profitloss",
  initialState: {
    profitLossArray: [],
    error: false,
  },
  reducers: {
    addDataValue: (state, actions) => {
      state.profitLossArray = actions.payload;
    },
    startError: (state) => {
      state.error = true;
    },

    resetError:(state) => {
        state.error = false
    }
  },
});

export const { addDataValue, startError, resetError } = profitlossSlice.actions;

export default profitlossSlice.reducer;
