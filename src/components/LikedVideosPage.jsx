import React, { Component } from "react";
import AsideMenu from "./AsideMenu";

class LikedVideosPage extends Component {
  render() {
    const {
      state,
      handleChoose,
      videoDuration,
      viewCount,
      timeSinceLoadingVideo,
      handleGetVideoInfo,
      currentUser,
    } = this.props;
    return (
      <div>
        <AsideMenu
          state={state}
          handleChoose={handleChoose}
          currentUser={currentUser}
        />
        <div
          className={`${
            state.openSideBar ? "md:ml-64  md:pl-20 " : "md:ml-16  md:pl-48"
          } bg-gray-50 pt-20 `}
        >
          321
        </div>
      </div>
    );
  }
}

export default LikedVideosPage;
