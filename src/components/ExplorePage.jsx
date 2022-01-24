import React, { Component } from "react";
import AsideMenu from "./AsideMenu";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import { ReactComponent as TrendIcon } from "../icons/fire-icon-trend.svg";
import { ReactComponent as GamesIcon } from "../icons/game-icon.svg";
import { ReactComponent as MusicIcon } from "../icons/music.svg";
import { ReactComponent as SportIcon } from "../icons/sportsicon.svg";

class ExplorePage extends Component {
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
          <div className="flex justify-between md:pr-[35%] pb-10 text-lg font-medium">
            <div className=" pr-24 pb-8 pl-6 pt-6 rounded bg-white hover:bg-gray-200 cursor-pointer">
              <TrendIcon className="w-8 h-8 mb-4" />
              <span>Tranding</span>
            </div>
            <div className="pr-24 pb-8 pl-6 pt-6 rounded bg-white hover:bg-gray-200 cursor-pointer">
              <MusicIcon className="w-8 h-8 mb-4" />
              <span>Music</span>
            </div>
            <div className="pr-24 pb-8 pl-6 pt-6 rounded  bg-white hover:bg-gray-200 cursor-pointer">
              <GamesIcon className="w-8 h-8 mb-4" />
              <span>Gaming</span>
            </div>
            <div className="pr-24 pb-8 pl-6 pt-6 rounded bg-white hover:bg-gray-200 cursor-pointer">
              <SportIcon className="w-8 h-8 mb-4" />
              <span>Sports</span>
            </div>
          </div>
          <span className="font-semibold p-3 md:p-0">Trending videos</span>
          <div className="flex flex-col p-3 md:p-0">
            {state.video.map((i) => (
              <Link
                onClick={() => handleGetVideoInfo(i)}
                to={`/video/${i.id}`}
                key={i.id}
                className="flex mt-4"
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
                <div className="pt-1 ml-6 w-[40%]">
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
                  <p className="line-clamp-2 text-xs mt-4">
                    {i.snippet.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ExplorePage;
