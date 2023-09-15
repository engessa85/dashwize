import { createSlice } from "@reduxjs/toolkit";

const mtmSlice = createSlice({
  name: "mtm",
  initialState: {
    mtmdataActual: [],
    mtmdataTarget: [],
    error: false,
  },
  reducers: {
    addDataActual: (state, actions) => {
      state.mtmdataActual = actions.payload;
    },
    addDataTarget: (state, actions) => {
      state.mtmdataTarget = actions.payload;
    },
    startError: (state) => {
      state.error = true;
    },

    resetError:(state) => {
        state.error = false
    }
  },
});

export const { addDataActual, addDataTarget, startError, resetError } = mtmSlice.actions;

export default mtmSlice.reducer;
