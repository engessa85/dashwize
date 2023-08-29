import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./demoSlice";
import signinSlice from "./signinSlice";
import signupSlice from "./signupSlice";
const store = configureStore({
  reducer: {
    demo: demoSlice,
    sigin: signinSlice,
    sigup: signupSlice,
  },
});

export default store;
