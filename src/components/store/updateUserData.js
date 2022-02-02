import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { doc, updateDoc } from "firebase/firestore";

export const updateUserData = createAsyncThunk(
  "userData/updateUserDataStatus",
  async ({ file, username }) => {
    const storageRef = ref(storage, uuidv4());

    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);

    return await updateDoc(doc(db, "users", username), {
      profileSrc: downloadUrl,
    });
  }
);

const updateUserDataSlice = createSlice({
  name: "userData",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default updateUserDataSlice.reducer;
