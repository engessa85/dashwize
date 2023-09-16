import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./demoSlice";
import signinSlice from "./signinSlice";
import signupSlice from "./signupSlice";
import paymentSlice from "./paymentSlice";
import mtmSlice from "./mtmSlice";
import getmtmtSlice from "./getmtmtSlice";
import profitLossSlice from "./profitLossSlice";
import getProfitLossSlice from "./getProfitLossSlice";
const store = configureStore({
  reducer: {
    demo: demoSlice,
    sigin: signinSlice,
    sigup: signupSlice,
    payment: paymentSlice,
    mtm: mtmSlice,
    getmtm: getmtmtSlice,
    profitloss:profitLossSlice,
    getprofitloss:getProfitLossSlice
  },
});

export default store;
