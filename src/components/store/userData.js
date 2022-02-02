import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const getUser = createAsyncThunk(
  "/user/getUserStatus",
  async (currentUser) => {
    const response = await doc(db, "users", currentUser.displayName);
    const docSnap = getDoc(response);
    return (await docSnap).data();
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
