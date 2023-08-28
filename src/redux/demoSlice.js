import { createSlice } from "@reduxjs/toolkit";

const demoSlice = createSlice({
  name: "demo",
  initialState: {
    name: "mohamed",
    age: "25",
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});


export const {changeName} = demoSlice.actions;
export default demoSlice.reducer;