import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const videoData = "https://www.googleapis.com/youtube/v3/videos?";
const channelData = "https://www.googleapis.com/youtube/v3/channels?";
const api_key = process.env.REACT_APP_API_KEY;

export const getLikedVideo = createAsyncThunk(
  "likedVideoData/likedVideoDataStatus",
  async (id) => {
    const response = await fetch(
      videoData +
        new URLSearchParams({
          key: api_key,
          part: "snippet, contentDetails, statistics",
          id: id,
        })
    );
    const data = await response.json();

    return await Promise.all(
      data.items.map((video) =>
        fetch(
          channelData +
            new URLSearchParams({
              key: api_key,
              part: "snippet, statistics",
              id: video.snippet.channelId,
            })
        )
          .then((response) => response.json())
          .then((data) => ({
            channelThumbnail: data.items[0].snippet.thumbnails.default.url,
            subscribersCount: data.items[0].statistics.subscriberCount,
            channelUrl: data.items[0].id,
            ...video,
          }))
      )
    );
  }
);

const likedVideoDataSlice = createSlice({
  name: "likedVideoData",
  initialState: {
    likedUserVideo: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikedVideo.fulfilled, (state, action) => {
      state.likedUserVideo = action.payload;
    });
  },
});

export default likedVideoDataSlice.reducer;
