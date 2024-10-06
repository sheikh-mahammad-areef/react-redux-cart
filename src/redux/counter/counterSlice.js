import { createSlice } from "@reduxjs/toolkit";

// initial state for the counter
const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export the auto-generated action creators
export const { increment, decrement, reset } = counterSlice.actions;

// Export the reducer for configuring the store
export default counterSlice.reducer;
