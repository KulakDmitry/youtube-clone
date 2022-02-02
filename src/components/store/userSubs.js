import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import usersCollection from "../services/usersCollection";

export const getUser = createAsyncThunk(
  "/user/getUserStatus",
  async (username) => {
    return usersCollection.getUser(username);
  }
);

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

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(followUser.fulfilled, (state, action) => {
      state.data.followers.push(action.payload);
    });

    builder.addCase(unfollowUser.fulfilled, (state, action) => {
      state.data.followers = state.data.followers.filter(
        (follower) => follower !== action.payload
      );
    });
    builder.addCase(like.fulfilled, (state, action) => {
      state.data.likedVideos.push(action.payload);
    });

    builder.addCase(unlike.fulfilled, (state, action) => {
      state.data.likedVideos = state.data.likedVideos.filter(
        (follower) => follower !== action.payload
      );
    });
  },
});

export default userSlice.reducer;
