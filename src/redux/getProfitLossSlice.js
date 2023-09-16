import { createSlice } from "@reduxjs/toolkit";

const getProfitLossSlice = createSlice({
  name: "getprofitloss",
  initialState: {
    getProfitLosslvalue: [],
    getProfitTotalDays: [],
    getProfitTotalTimes: [],
    profitPending: false,
    profitError: false,
  },
  reducers: {
    startFetching: (state) => {
      state.profitPending = true;
    },
    startSuccess: (state, action) => {
      state.profitPending = false;
      state.getProfitLosslvalue = action.payload.totalValueArray;
      state.getProfitTotalDays = action.payload.totalCreatedDate_day;
      state.getProfitTotalTimes = action.payload.totalCreatedDate_hour;
    },
    startError: (state) => {
      state.profitPending = false;
      state.profitError = true;
    },
    restprofitlossError: (state) => {
      state.profitError = false;
    },
  },
});

export const { startFetching, startSuccess, startError, restprofitlossError } =
  getProfitLossSlice.actions;
export default getProfitLossSlice.reducer;
