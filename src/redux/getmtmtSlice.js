import { createSlice } from "@reduxjs/toolkit";

const getmtmtSlice = createSlice({
  name: "getmtm",
  initialState: {
    getTotalActualvalue: [],
    getTotalTargetValue: [],
    getTotalDays: [],
    getTotalTimes: [],
    getTotalDemos: [],
    pending: false,
    error: false,
  },
  reducers: {
    startFetching: (state) => {
      state.pending = true;
    },
    startSuccess: (state, action) => {
      state.pending = false;
      state.getTotalActualvalue = action.payload.totalactualValueArray;
      state.getTotalTargetValue = action.payload.totaltargetValueArray;
      state.getTotalDays = action.payload.totalCreatedDate_day;
      state.getTotalTimes = action.payload.totalCreatedDate_hour;
      state.getTotalDemos = action.payload.totalDemos;
    },
    startError: (state) => {
      state.pending = false;
      state.error = true;
    },
    restmtmError: (state) => {
      state.error = false;
    },
  },
});

export const { startFetching, startSuccess, startError, restmtmError } =
  getmtmtSlice.actions;
export default getmtmtSlice.reducer;
