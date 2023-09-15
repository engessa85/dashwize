import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./demoSlice";
import signinSlice from "./signinSlice";
import signupSlice from "./signupSlice";
import paymentSlice from "./paymentSlice";
import mtmSlice from "./mtmSlice";
import getmtmtSlice from "./getmtmtSlice";
const store = configureStore({
  reducer: {
    demo: demoSlice,
    sigin: signinSlice,
    sigup: signupSlice,
    payment: paymentSlice,
    mtm: mtmSlice,
    getmtm: getmtmtSlice,
  },
});

export default store;
