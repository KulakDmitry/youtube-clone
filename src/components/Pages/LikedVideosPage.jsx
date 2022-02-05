import React, { Component } from "react";
import { connect } from "react-redux";
import { getLikedVideo } from "../../store/likedVideDataSlice";
import RenderVideoList from "../RenderVideoList";
import { v4 as uuidv4 } from "uuid";
import { getCommentsData } from "../../store/commentsDataSlice";
import { getVideoInfo } from "../../store/videoInfoSlice";

class LikedVideosPage extends Component {
  componentDidMount() {
    const { dispatch, user } = this.props;

    dispatch(getLikedVideo(user && user.likedVideos));
  }

  handleGetVideoInfo = async (video) => {
    const { dispatch } = this.props;
    await dispatch(getCommentsData(video.id));
    await dispatch(getVideoInfo(video));
  };

  render() {
    const { openSideBar, user, likedUserVideo } = this.props;
    return (
      <div>
        <div
          className={`${
            openSideBar ? "md:ml-64  md:pl-20 " : "md:ml-16  md:pl-48"
          } bg-gray-50 pt-20 `}
        >
          {user && user.likedVideos.length ? (
            likedUserVideo.map((i) => (
              <RenderVideoList
                handleGetVideoInfo={this.handleGetVideoInfo}
                i={i}
                key={uuidv4()}
              />
            ))
          ) : (
            <div className="text-center md:text-left h-screen w-full p-10">
              no liked videos
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    likedUserVideo: state.likedVideoData.likedUserVideo,
    openSideBar: state.modalWindows.openSideBar,
  };
};

export default connect(mapStateToProps)(LikedVideosPage);
