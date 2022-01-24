import React, { Component } from "react";
import AsideMenu from "./AsideMenu";
import MainPageTags from "./MainPageTags";
import VideoContent from "./VideoContent";

class MainPage extends Component {
  render() {
    const {
      state,
      handleChoose,
      timeSinceLoadingVideo,
      videoDuration,
      handleGetVideoInfo,
      convertCount,
      currentUser,
    } = this.props;
    return (
      <>
        <AsideMenu
          state={state}
          handleChoose={handleChoose}
          currentUser={currentUser}
        />
        <MainPageTags state={state} />
        <VideoContent
          state={state}
          timeSinceLoadingVideo={timeSinceLoadingVideo}
          videoDuration={videoDuration}
          convertCount={convertCount}
          handleGetVideoInfo={handleGetVideoInfo}
        />
      </>
    );
  }
}

export default MainPage;
