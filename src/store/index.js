import { configureStore } from "@reduxjs/toolkit";
import videoContentDataReducer from "./videoContentDataSlice";
import searchDataReducer from "./searchDataSlice";
import commentsDataReducer from "./commentsDataSlice";
import userReducer from "./userSlice";
import likedVideoDataReducer from "./likedVideoDataSlice";
import channelSubsReducer from "./channelSubsSlice";
import loadingReducer from "./loadingSlice";
import videoInfoReducer from "./videoInfoSlice";
import handlersReducer from "./handlersSlice";

export default configureStore({
  reducer: {
    videoContentData: videoContentDataReducer,
    searchData: searchDataReducer,
    commentsData: commentsDataReducer,
    user: userReducer,
    likedVideoData: likedVideoDataReducer,
    channelSubsData: channelSubsReducer,
    loading: loadingReducer,
    videoInfo: videoInfoReducer,
    modalWindows: handlersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
