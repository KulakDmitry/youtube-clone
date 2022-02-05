import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const videoData = "https://www.googleapis.com/youtube/v3/videos?";
const channelData = "https://www.googleapis.com/youtube/v3/channels?";
const api_key = process.env.REACT_APP_API_KEY;

export const getVideo = createAsyncThunk(
  "videoContentData/getVideoStatus",
  async () => {
    const response = await fetch(
      videoData +
        new URLSearchParams({
          key: api_key,
          part: "snippet, contentDetails, statistics",
          chart: "mostPopular",
          maxResults: 20,
          regionCode: "US",
          pageToken: "",
        })
    );
    const data = await response.json();
    return Promise.all(
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
          .then((videoData) => ({
            channelThumbnail: videoData.items[0].snippet.thumbnails.default.url,
            subscribersCount: videoData.items[0].statistics.subscriberCount,
            channelUrl: videoData.items[0].id,
            pageToken: data.nextPageToken,
            ...video,
          }))
      )
    ).then();
  }
);

const videoContentDataSlice = createSlice({
  name: "videoContentData",
  initialState: {
    video: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.video = [...state.video, ...action.payload];
    });
  },
});

export default videoContentDataSlice.reducer;
