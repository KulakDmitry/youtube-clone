import { createSlice } from "@reduxjs/toolkit";

const handlersSlice = createSlice({
  name: "modalWindows",
  initialState: {
    openSideBar: true,
    visibleModalSingUp: false,
    visibleYoutubeApps: false,
    visibleSettings: false,
    visibleUserModalMenu: false,
  },
  reducers: {
    handleSideBar: (state) => {
      state.openSideBar = !state.openSideBar;
    },
    handleModalYouTubeApps: (state) => {
      state.visibleYoutubeApps = !state.visibleYoutubeApps;
    },
    handleModalSettings: (state) => {
      state.visibleSettings = !state.visibleSettings;
    },
    handleModalSignUp: (state) => {
      state.visibleModalSingUp = !state.visibleModalSingUp;
    },
    handleUserModalMenu: (state) => {
      state.visibleUserModalMenu = !state.visibleUserModalMenu;
    },
  },
});

export const {
  handleSideBar,
  handleModalYouTubeApps,
  handleModalSettings,
  handleModalSignUp,
  handleUserModalMenu,
} = handlersSlice.actions;

export default handlersSlice.reducer;
