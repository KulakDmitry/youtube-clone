import React, { Component } from "react";
import AsideMenu from "./AsideMenu";
import { connect } from "react-redux";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { getLikedVideo } from "./store/likedVideoData";
import { getUser } from "./store/userData";

class LikedVideosPage extends Component {
  componentDidMount() {
    const { dispatch, user, currentUser } = this.props;

    dispatch(getUser(currentUser));

    dispatch(getLikedVideo(user && user.likedVideos));
  }

  render() {
    const {
      openSideBar,
      handleChoose,
      videoDuration,
      viewCount,
      timeSinceLoadingVideo,
      handleGetVideoInfo,
      currentUser,
      user,
      likedUserVideo,
    } = this.props;
    return (
      <div>
        <AsideMenu handleChoose={handleChoose} currentUser={currentUser} />
        <div
          className={`${
            openSideBar ? "md:ml-64  md:pl-20 " : "md:ml-16  md:pl-48"
          } bg-gray-50 pt-20 `}
        >
          {user && user.likedVideos.length ? (
            likedUserVideo.map((i) => (
              <Link
                onClick={() => handleGetVideoInfo(i)}
                to={`/video/${i.id}`}
                key={i.id}
                className="md:flex mt-4"
              >
                <div className="relative">
                  <img
                    className="w-full"
                    src={`${i.snippet.thumbnails.medium.url}`}
                    alt=""
                  />
                  <span className="absolute bottom-0 right-1 rounded-sm text-white bg-black text-xs px-0.5 mb-1">
                    {videoDuration(i.contentDetails.duration)}
                  </span>
                </div>
                <div className="pt-1 ml-6 mb-10 md:mb-0 md:w-[40%]">
                  <span className="text-lg font-medium line-clamp-2">
                    {i.snippet.title}
                  </span>
                  <span className="py-1 text-xs font-light after:content-['_•'] mr-1">
                    {i.snippet.channelTitle}
                  </span>
                  <span className="text-xs font-light">
                    <span className="after:content-['_•'] mr-1">
                      {viewCount(i.statistics.viewCount)} views
                    </span>
                    <span>
                      {timeSinceLoadingVideo(
                        DateTime.fromISO(i.snippet.publishedAt)
                      )}
                    </span>
                  </span>
                  <p className="hidden md:block md:line-clamp-2 md:text-xs md:mt-4">
                    {i.snippet.description}
                  </p>
                </div>
              </Link>
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
