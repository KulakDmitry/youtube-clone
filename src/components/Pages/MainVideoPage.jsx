import React, { Component } from "react";
import { ReactComponent as LikeIcon } from "../../icons/like-icon.svg";
import { ReactComponent as DislikeIcon } from "../../icons/dislike-icon.svg";
import { ReactComponent as LikeActive } from "../../icons/like-icon-active.svg";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { connect } from "react-redux";
import { followUser, like, unfollowUser, unlike } from "../../store/userSlice";
import { getUser } from "../../store/userSlice";
import { convertCount } from "../../utils/convertCount";
import { getVideoInfo } from "../../store/videoInfoSlice";
import { getCommentsData } from "../../store/commentsDataSlice";
import { videoDuration } from "../../utils/videoDurationConvert";
import { timeSinceLoadingVideo } from "../../utils/timeSinceLoadingVideo";
import PropTypes from "prop-types";

class MainVideoPage extends Component {
  componentDidMount() {
    const { currentUser, dispatch } = this.props;
    dispatch(getUser(currentUser));
  }

  handleFollow = () => {
    const { dispatch, videoInfo, user } = this.props;

    dispatch(
      followUser({
        usernameToFollow: user.username,
        currentUsername: videoInfo.channelUrl,
      })
    );
  };
  handleLike = () => {
    const { dispatch, videoInfo, user } = this.props;

    dispatch(
      like({
        usernameToFollow: user.username,
        currentUsername: videoInfo.id,
      })
    );
  };

  handleUnfollow = () => {
    const { dispatch, videoInfo, user } = this.props;

    dispatch(
      unfollowUser({
        usernameToUnfollow: user.username,
        currentUsername: videoInfo.channelUrl,
      })
    );
  };
  handleUnLike = () => {
    const { dispatch, videoInfo, user } = this.props;

    dispatch(
      unlike({
        usernameToUnfollow: user.username,
        currentUsername: videoInfo.id,
      })
    );
  };

  handleGetVideoInfo = async (video) => {
    const { dispatch } = this.props;
    dispatch(getCommentsData(video.id));
    await dispatch(getVideoInfo(video));
  };

  render() {
    const { currentUser, video, user, videoInfo } = this.props;
    return (
      <div>
        <div className="md:ml-3 py-20 md:flex md:px-14">
          <div className="md:w-2/3">
            <iframe
              className="w-full h-[245px]  md:h-[350px] lg:h-[375px] xl:h-[460px] 2xl:h-[680px]"
              title="video"
              src={`https://www.youtube.com/embed/${videoInfo.id}`}
              allowFullScreen
            />
            <div className="border-b pb-4">
              <p className="p-4 pb-0 md:p-0 md:pt-8 text-xl">
                {videoInfo.title}
              </p>
              <p className=" pl-4 md:p-0 md:pt-2 text-sm text-gray-500">
                <span className="after:content-['_•'] mr-1">
                  {videoInfo.views} views
                </span>
                <span>{videoInfo.publishedAt}</span>
              </p>
              <div className="flex justify-evenly pt-6 md:p-0 md:justify-end md:mr-32 text-sm ">
                {currentUser ? (
                  <button className="flex items-center mr-8">
                    {currentUser &&
                    user &&
                    !user.likedVideos?.includes(videoInfo.id) ? (
                      <LikeIcon
                        onClick={this.handleLike}
                        className="w-5 h-5 mx-2"
                      />
                    ) : null}
                    {currentUser &&
                    user &&
                    user.likedVideos?.includes(videoInfo.id) ? (
                      <p>
                        <LikeActive
                          onClick={this.handleUnLike}
                          className="w-5 h-5 mx-2"
                        />
                      </p>
                    ) : null}

                    <span className="font-medium">{videoInfo.likeCount}</span>
                  </button>
                ) : (
                  <button className="flex items-center mr-8">
                    <LikeIcon className="w-5 h-5 mx-2" />
                    <span className="font-medium">{videoInfo.likeCount}</span>
                  </button>
                )}

                <button className="flex items-center">
                  <DislikeIcon className="w-5 h-5 mx-2" />
                  <span className="font-medium">DISLIKE</span>
                </button>
              </div>
            </div>
            <div className="flex items-center border-b p-3 md:p-0 md:pb-10">
              <div className="flex flex-col pl-4 mt-4 w-full">
                <div className="flex items-center">
                  <div className="w-10 h-10 mr-2">
                    <img
                      className="rounded-full cursor-pointer"
                      src={videoInfo.channelThumbnail}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <a
                      href={`https://www.youtube.com/channel/${videoInfo.channelUrl}`}
                      className="text-sm font-semibold cursor-pointer"
                    >
                      {videoInfo.channelTitle}
                    </a>
                    <span className="text-xs text-gray-600">
                      {videoInfo.subscribersCount} subscribers
                    </span>
                  </div>
                  <div className="ml-auto ">
                    {currentUser &&
                    user &&
                    !user.followers?.includes(videoInfo.channelUrl) ? (
                      <button
                        className="bg-red-600 w-20 md:w-32 h-8 mt-2 cursor-pointer hover:bg-red-700"
                        onClick={this.handleFollow}
                      >
                        <span className="text-white text-sm">Subscribe</span>
                      </button>
                    ) : null}
                    {currentUser &&
                    user &&
                    user.followers?.includes(videoInfo.channelUrl) ? (
                      <button
                        className="bg-gray-200 w-20 md:w-32 h-8 mt-2 cursor-pointer hover:bg-gray-300"
                        onClick={this.handleUnfollow}
                      >
                        <span className="text-gray-600 text-sm">
                          Unsubscribe
                        </span>
                      </button>
                    ) : null}
                  </div>
                </div>

                <span className="text-sm pt-6">{videoInfo.description}</span>
              </div>
            </div>
            <div className="pt-6">
              <div className="pl-4 pb-4 md:pl-0 md:pb-0">
                {videoInfo.commentCount} Comments
              </div>
              <Comments currentUser={currentUser} videoInfo={videoInfo} />
            </div>
          </div>
          <div className="md:w-1/3 md:pl-7">
            {video.map((i) => (
              <Link
                onClick={() => this.handleGetVideoInfo(i)}
                to={`/video/${i.id}`}
                key={uuidv4()}
                className="flex flex-col lg:flex-row p-2 md:p-0 mb-2 cursor-pointer"
              >
                <div className="relative h-full w-full">
                  <img
                    className="w-full h-full"
                    src={`${i.snippet.thumbnails.medium.url}`}
                    alt=""
                  />
                  <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                    {videoDuration(i.contentDetails.duration)}
                  </span>
                </div>
                <div className="flex flex-col px-4 relative w-full">
                  <span className="text-sm font-semibold pt-4 md:pt-0">
                    {i.snippet.title}
                  </span>
                  <span className="text-xs text-gray-500 my-1 ">
                    {i.snippet.channelTitle}
                  </span>
                  <div className="text-xs text-gray-500 ">
                    <span className="after:content-['_•'] mr-1">
                      {convertCount(i.statistics.viewCount)} views
                    </span>
                    <span>{timeSinceLoadingVideo(i.snippet.publishedAt)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    video: state.videoContentData.video,
    user: state.user.user,
    isChoose: state.searchData.isChoose,
    videoInfo: state.videoInfo.videoInfo,
    openSideBar: state.modalWindows.openSideBar,
  };
};

export default connect(mapStateToProps)(MainVideoPage);

MainVideoPage.defaultProps = {
  user: null,
  currentUser: null,
};

MainVideoPage.propTypes = {
  currentUser: PropTypes.object,
  video: PropTypes.array.isRequired,
  videoInfo: PropTypes.object.isRequired,
  user: PropTypes.object,
};
