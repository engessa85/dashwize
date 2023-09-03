import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./demoSlice";
import signinSlice from "./signinSlice";
import signupSlice from "./signupSlice";
import paymentSlice from "./paymentSlice";
const store = configureStore({
  reducer: {
    demo: demoSlice,
    sigin: signinSlice,
    sigup: signupSlice,
    payment:paymentSlice,
  },
});

export default store;
