import { configureStore } from "@reduxjs/toolkit";
import videoContentDataReducer from "./videoContentData";
import searchDataReducer from "./searchVideoData";
import commentsDataReducer from "./videoCommentsData";
import userDataReducer from "./updateUserData";
import userReducer from "./userData";
import likedVideoDataReducer from "./likedVideoData";
import channelSubsReducer from "./subsChannelData";
import loadingReducer from "./loadingData";
import videoInfoReducer from "./videoInfoData";
import handlersReducer from "./handlers";

export default configureStore({
  reducer: {
    videoContentData: videoContentDataReducer,
    searchData: searchDataReducer,
    commentsData: commentsDataReducer,
    userData: userDataReducer,
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
