import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const channelData = "https://www.googleapis.com/youtube/v3/channels?";
const api_key = process.env.REACT_APP_API_KEY;

export const getChannel = createAsyncThunk(
  "channelData/channelDataStatus",
  async (id) => {
    const response = await fetch(
      channelData +
        new URLSearchParams({
          key: api_key,
          part: "snippet, contentDetails, statistics",
          id: id,
        })
    );
    const data = await response.json();
    return data.items;
  }
);

const channelSubsSlice = createSlice({
  name: "channelSubsData",
  initialState: {
    channelSubs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChannel.fulfilled, (state, action) => {
      state.channelSubs = action.payload;
    });
  },
});

export default channelSubsSlice.reducer;
