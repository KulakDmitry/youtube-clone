import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import defaultAvatar from "../../icons/profileDefaultAvatar.jpg";
import * as moment from "moment";
import { v4 as uuidv4 } from "uuid";
const commentsData = "https://www.googleapis.com/youtube/v3/commentThreads?";
const api_key = process.env.REACT_APP_API_KEY;

export const getCommentsData = createAsyncThunk(
  "commentsData/getCommentsStatus",
  async (id) => {
    const response = await fetch(
      commentsData +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          videoId: id,
        })
    );
    const json = await response.json();
    return json.items;
  }
);

const commentsDataSlice = createSlice({
  name: "commentsData",
  initialState: {
    videoComments: [],
  },
  reducers: {
    addComment: (state, action) => {
      state.videoComments = [
        {
          id: uuidv4(),
          videoComment: {
            authorProfileImageUrl:
              action.payload.user && action.payload.user.profileSrc
                ? action.payload.user.profileSrc
                : defaultAvatar,
            authorDisplayName: action.payload.currentUser.displayName,
            publishedAt: moment().toISOString(),
            textOriginal: action.payload.comment,
            likeCount: 0,
          },
        },
        ...action.payload.videoComments,
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCommentsData.fulfilled, (state, action) => {
      state.videoComments = action.payload;
    });
  },
});

export const { addComment } = commentsDataSlice.actions;

export default commentsDataSlice.reducer;
