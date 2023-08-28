import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./demoSlice";
import signinSlice from "./signinSlice";
const store = configureStore({
  reducer: {
    demo: demoSlice,
    sigin: signinSlice,
  },
});

export default store;
