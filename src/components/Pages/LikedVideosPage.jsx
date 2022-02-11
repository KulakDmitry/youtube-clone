import React, { Component } from "react";
import { connect } from "react-redux";
import { getLikedVideo } from "../../store/likedVideoDataSlice";
import RenderVideoList from "../RenderVideoList";
import { getCommentsData } from "../../store/commentsDataSlice";
import { getVideoInfo } from "../../store/videoInfoSlice";
import PropTypes from "prop-types";

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
    const { openSideBar, user, likedUserVideos } = this.props;
    return (
      <div>
        <div
          className={`${
            openSideBar ? "md:ml-64  md:pl-20 " : "md:ml-16  md:pl-48"
          } bg-gray-50 pt-20 `}
        >
          {user && user.likedVideos.length ? (
            likedUserVideos.map((video, index) => (
              <RenderVideoList
                handleGetVideoInfo={this.handleGetVideoInfo}
                video={video}
                key={index}
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
    likedUserVideos: state.likedVideoData.likedUserVideo,
    openSideBar: state.modalWindows.openSideBar,
  };
};

export default connect(mapStateToProps)(LikedVideosPage);

LikedVideosPage.defaultProps = {
  likedUserVideos: [],
  user: null,
};

LikedVideosPage.propTypes = {
  openSideBar: PropTypes.bool.isRequired,
  user: PropTypes.object,
  likedUserVideos: PropTypes.array,
};
