import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import usersCollection from "../components/services/usersCollection";

export const followUser = createAsyncThunk(
  "/user/followUserStatus",
  async ({ usernameToFollow, currentUsername }) => {
    await usersCollection.followUser(usernameToFollow, currentUsername);

    return currentUsername;
  }
);

export const unfollowUser = createAsyncThunk(
  "/user/unfollowUserStatus",
  async ({ usernameToUnfollow, currentUsername }) => {
    await usersCollection.unfollowUser(usernameToUnfollow, currentUsername);

    return currentUsername;
  }
);
export const like = createAsyncThunk(
  "/user/likeStatus",
  async ({ usernameToFollow, currentUsername }) => {
    await usersCollection.like(usernameToFollow, currentUsername);

    return currentUsername;
  }
);

export const unlike = createAsyncThunk(
  "/user/unlikeStatus",
  async ({ usernameToUnfollow, currentUsername }) => {
    await usersCollection.unlike(usernameToUnfollow, currentUsername);

    return currentUsername;
  }
);

export const getUser = createAsyncThunk(
  "/user/getUserStatus",
  async (currentUser) => {
    const response = await doc(db, "users", currentUser.displayName);
    const docSnap = await getDoc(response);
    if (docSnap.exists()) {
      return docSnap.data();
    }

    return null;
  }
);

export const updateUserData = createAsyncThunk(
  "userData/updateUserDataStatus",
  async ({ file, username }) => {
    const storageRef = ref(storage, uuidv4());

    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);

    await updateDoc(doc(db, "users", username), {
      profileSrc: downloadUrl,
    });

    const response = await doc(db, "users", username);
    const docSnap = await getDoc(response);
    if (docSnap.exists()) {
      return docSnap.data();
    }

    return null;
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
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(followUser.fulfilled, (state, action) => {
      state.user.followers.push(action.payload);
    });

    builder.addCase(unfollowUser.fulfilled, (state, action) => {
      state.user.followers = state.user.followers.filter(
        (follower) => follower !== action.payload
      );
    });
    builder.addCase(like.fulfilled, (state, action) => {
      state.user.likedVideos.push(action.payload);
    });

    builder.addCase(unlike.fulfilled, (state, action) => {
      state.user.likedVideos = state.user.likedVideos.filter(
        (follower) => follower !== action.payload
      );
    });
  },
});

export default userSlice.reducer;
