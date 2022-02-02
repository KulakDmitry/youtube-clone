import React, { Component } from "react";
import AsideMenu from "./AsideMenu";
import MainPageTags from "./MainPageTags";
import VideoContent from "./VideoContent";

class MainPage extends Component {
  render() {
    const {
      handleChoose,
      timeSinceLoadingVideo,
      videoDuration,
      handleGetVideoInfo,
      convertCount,
      currentUser,
    } = this.props;
    return (
      <>
        <AsideMenu handleChoose={handleChoose} currentUser={currentUser} />
        <MainPageTags />
        <VideoContent
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
