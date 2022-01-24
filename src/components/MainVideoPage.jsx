import React, { Component } from "react";
import { ReactComponent as LikeIcon } from "../icons/like-icon.svg";
import { ReactComponent as DislikeIcon } from "../icons/dislike-icon.svg";
import { ReactComponent as SubscribeIcon } from "../icons/subscribe-youtube.svg";
import { ReactComponent as HomeButton } from "../icons/home.svg";
import { ReactComponent as ExploreButton } from "../icons/explore.svg";
import { ReactComponent as MusicButton } from "../icons/music-icon.svg";
import { ReactComponent as SportButton } from "../icons/sport-icon.svg";
import { ReactComponent as GamingButton } from "../icons/gaming-icon.svg";
import { ReactComponent as NewsButton } from "../icons/news-icon.svg";
import { ReactComponent as LiveButton } from "../icons/live-icon.svg";
import { ReactComponent as VRButton } from "../icons/360-video-icon.svg";
import { Link } from "react-router-dom";
import { ReactComponent as SubscriptionsButton } from "../icons/subscriptions-icon.svg";
import Comments from "./Comments";

class MainVideoPage extends Component {
  render() {
    const {
      openSideBar,
      handleChoose,
      state,
      handleGetVideoInfo,
      timeSinceLoadingVideo,
      videoDuration,
      convertCount,
      currentUser,
      handleAddComment,
    } = this.props;
    return (
      <div>
        {!openSideBar && (
          <div className="flex fixed flex-col w-60 border-gray-400 mt-14 text-sm z-30 bg-white h-screen ">
            <Link
              to="/"
              onClick={() => handleChoose("home")}
              className={
                state.isChoose === "home"
                  ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                  : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
              }
            >
              <HomeButton className="w-5 h-6 mr-5" />
              <span>Home</span>
            </Link>

            <Link
              to="/explore"
              onClick={() => handleChoose("explore")}
              className={
                state.isChoose === "explore"
                  ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                  : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
              }
            >
              <ExploreButton className="w-5 h-6 mr-5" />
              <span>Explore</span>
            </Link>

            {currentUser && currentUser.displayName ? (
              <>
                <Link
                  to="/subscriptions"
                  onClick={() => handleChoose("subscriptions")}
                  className={
                    state.isChoose === "subscriptions"
                      ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                      : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                  }
                >
                  <SubscriptionsButton className="w-5 h-6  mr-5" />
                  <span>Subs</span>
                </Link>

                <Link
                  to="/liked-videos"
                  onClick={() => handleChoose("liked-videos")}
                  className={
                    state.isChoose === "liked-videos"
                      ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                      : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                  }
                >
                  <LikeIcon className="w-5 h-6  mr-5" />
                  <span>Liked videos</span>
                </Link>
              </>
            ) : null}

            <p className="ml-5 pt-3 text-gray-500 border-t">BEST OF YOUTUBE</p>

            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <MusicButton className="w-5 h-5 mr-5" />
              <span>Music</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <SportButton className="w-5 h-5 mr-5" />
              <span>Sport</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <GamingButton className="w-5 h-5 mr-5" />
              <span>Games</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <NewsButton className="w-5 h-5 mr-5" />
              <span>News</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <LiveButton className="w-5 h-5 mr-5" />
              <span>Live</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <VRButton className="w-5 h-5 mr-5" />
              <span>360° video</span>
            </button>
          </div>
        )}

        <div className="py-20 md:flex md:px-14">
          <div className="md:w-2/3">
            <iframe
              className="w-full h-[245px]  md:h-[550px]"
              title="video"
              src={`https://www.youtube.com/embed/${state.videoInfo.id}`}
              allowFullScreen
            />
            <div className="border-b pb-4">
              <p className="p-4 pb-0 md:p-0 md:pt-8 text-xl">
                {state.videoInfo.title}
              </p>
              <p className=" pl-4 md:p-0 md:pt-2 text-sm text-gray-500">
                <span className="after:content-['_•'] mr-1">
                  {state.videoInfo.views} views
                </span>
                <span>{state.videoInfo.publishedAt}</span>
              </p>
              <div className="flex justify-evenly pt-6 md:p-0 md:justify-end md:mr-32 text-sm ">
                <button className="flex items-center mr-8">
                  <LikeIcon className="w-5 h-5 mx-2" />
                  <span className="font-medium">
                    {state.videoInfo.likeCount}
                  </span>
                </button>
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
                      src={state.videoInfo.channelThumbnail}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <a
                      href={`https://www.youtube.com/channel/${state.videoInfo.channelUrl}`}
                      className="text-sm font-semibold cursor-pointer"
                    >
                      {state.videoInfo.channelTitle}
                    </a>
                    <span className="text-xs text-gray-600">
                      {state.videoInfo.subscribersCount} subscribers
                    </span>
                  </div>
                  <div className="ml-auto ">
                    <SubscribeIcon className="w-20 md:w-32 h-14 md:scale-[2] cursor-pointer" />
                  </div>
                </div>

                <span className="text-sm pt-6">
                  {state.videoInfo.description}
                </span>
              </div>
            </div>
            <div className="pt-6">
              <div className="pl-4 pb-4 md:pl-0 md:pb-0">
                {state.videoInfo.commentCount} Comments
              </div>
              <Comments
                state={state}
                timeSinceLoadingVideo={timeSinceLoadingVideo}
                handleAddComment={handleAddComment}
                currentUser={currentUser}
              />
            </div>
          </div>
          <div className="md:w-1/3 md:pl-7">
            {state.video.map((i) => (
              <Link
                onClick={() => handleGetVideoInfo(i)}
                to={`/video/${i.id}`}
                key={i.id}
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

export default MainVideoPage;
