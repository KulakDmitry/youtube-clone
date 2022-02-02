import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const searchData = "https://www.googleapis.com/youtube/v3/search?";
const channelData = "https://www.googleapis.com/youtube/v3/channels?";
const videoData = "https://www.googleapis.com/youtube/v3/videos?";
const api_key = process.env.REACT_APP_API_KEY;

export const getSearchData = createAsyncThunk(
  "videoContentData/getSearchStatus",
  async (value) => {
    const response = await fetch(
      searchData +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          maxResults: 10,
          q: value,
        })
    );
    const data = await response.json();

    return Promise.all(
      data.items.map((video) =>
        fetch(
          videoData +
            new URLSearchParams({
              key: api_key,
              part: "contentDetails, statistics",
              id: video.id.videoId,
            })
        )
          .then((response) => response.json())
          .then((data) => ({
            duration: data.items[0].contentDetails.duration,
            views: data.items[0].statistics.viewCount,
            likeCount: data.items[0].statistics.likeCount,
            commentCount: data.items[0].statistics.commentCount,
            ...video,
          }))
          .then((video) =>
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
      )
    ).then();
  }
);

export const getSearchSortData = createAsyncThunk(
  "searchSortData/getSearchSortStatus",
  async ({ searchText, e }) => {
    const response = await fetch(
      searchData +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          maxResults: 5,
          q: searchText,
          order: e.target.value,
        })
    );
    const data = await response.json();

    return Promise.all(
      data.items.map((video) =>
        fetch(
          videoData +
            new URLSearchParams({
              key: api_key,
              part: "contentDetails, statistics",
              id: video.id.videoId,
            })
        )
          .then((response) => response.json())
          .then((data) => ({
            duration: data.items[0].contentDetails.duration,
            views: data.items[0].statistics.viewCount,
            likeCount: data.items[0].statistics.likeCount,
            commentCount: data.items[0].statistics.commentCount,
            ...video,
          }))
          .then((video) =>
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
      )
    ).then();
  }
);

const searchDataSlice = createSlice({
  name: "searchData",
  initialState: {
    searchVideoData: [],
    searchText: "",
    isChoose: "",
  },
  reducers: {
    handleSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    clearData: (state) => {
      state.searchVideoData = [];
    },
    isChoose: (state, action) => {
      state.isChoose = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchData.fulfilled, (state, action) => {
      state.searchVideoData = action.payload;
    });
    builder.addCase(getSearchSortData.fulfilled, (state, action) => {
      state.searchVideoData = action.payload;
    });
  },
});

export const { handleSearchText, clearData, isChoose } =
  searchDataSlice.actions;

export default searchDataSlice.reducer;
