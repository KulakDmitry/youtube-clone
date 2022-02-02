import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import * as numeral from "numeral";

const convertCount = (str) => {
  let num;

  if (parseInt(str) > 1000) {
    num = numeral(str).format("0a").toUpperCase();
  } else {
    num = parseInt(str);
  }

  if (parseInt(str) > 1000000) {
    num = numeral(str).format("0.0a").toUpperCase();
  }

  return num;
};

const videoInfoSlice = createSlice({
  name: "videoInfo",
  initialState: {
    videoInfo: {},
  },
  reducers: {
    getVideoInfo: (state, action) => {
      state.videoInfo = {
        id: action.payload.id,
        title: action.payload.snippet.title,
        description: action.payload.snippet.description,
        views: convertCount(action.payload.statistics.viewCount),
        channelTitle: action.payload.snippet.channelTitle,
        likeCount: convertCount(action.payload.statistics.likeCount),
        commentCount: convertCount(action.payload.statistics.commentCount),
        subscribersCount: convertCount(action.payload.subscribersCount),
        publishedAt: DateTime.fromISO(
          action.payload.snippet.publishedAt
        ).toLocaleString(DateTime.DATE_MED),
        channelThumbnail: action.payload.channelThumbnail,
        channelUrl: action.payload.channelUrl,
      };
    },
    getVideoSearchInfo: (state, action) => {
      state.videoInfo = {
        id: action.payload.id.videoId,
        title: action.payload.snippet.title,
        description: action.payload.snippet.description,
        views: convertCount(action.payload.views),
        channelTitle: action.payload.snippet.channelTitle,
        likeCount: convertCount(action.payload.likeCount),
        commentCount: convertCount(action.payload.commentCount),
        subscribersCount: convertCount(action.payload.subscribersCount),
        publishedAt: DateTime.fromISO(
          action.payload.snippet.publishedAt
        ).toLocaleString(DateTime.DATE_MED),
        channelThumbnail: action.payload.channelThumbnail,
        channelUrl: action.payload.channelUrl,
      };
    },
  },
});

export const { getVideoInfo, getVideoSearchInfo } = videoInfoSlice.actions;

export default videoInfoSlice.reducer;
