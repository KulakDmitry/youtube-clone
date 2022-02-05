import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    loadingTrue: (state) => {
      state.isLoading = true;
    },
    loadingFalse: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loadingTrue, loadingFalse } = loadingSlice.actions;

export default loadingSlice.reducer;
