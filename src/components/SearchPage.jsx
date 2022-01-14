import React, { Component } from "react";
import MainPage from "./MainPage";
import Header from "./Header";
import { Link } from "react-router-dom";
import { ReactComponent as FilterIcon } from "../icons/filter-icon.svg";

class SearchPage extends Component {
  render() {
    const {
      state,
      handleSearchClick,
      handleSearch,
      handleChoose,
      handleSideBar,
      handleModalApps,
      handleModalSettings,
      visibleApps,
      visibleSettings,
      videoDuration,
      viewCount,
      timeSinceLoadingVideo,
    } = this.props;
    return (
      <div>
        <Header
          handleSideBar={handleSideBar}
          handleModalApps={handleModalApps}
          handleModalSettings={handleModalSettings}
          visibleApps={visibleApps}
          visibleSettings={visibleSettings}
          handleSearchClick={handleSearchClick}
          handleSearch={handleSearch}
        />
        <MainPage state={state} handleChoose={handleChoose} />

        <div
          className={` ${
            state.openSideBar ? "flex flex-col ml-64 " : "flex flex-col ml-16 "
          }  pt-20 md:pt-32 md:bg-gray-50 md:h-full md:p-14`}
        >
          <div className="pb-2 mb-8 border-b border-gray-300">
            <button className=" flex items-center cursor-pointer">
              <FilterIcon className="w-5 h-5" />
              <span className="pl-3 text-gray-600 font-semibold text-sm">
                FILTERS
              </span>
            </button>
            <div className="p-20 fixed">filters options</div>
          </div>
          {state.searchVideoData.map((i) => (
            <Link to="/video" key={i.id} className="flex mb-3">
              <div className="relative">
                <img
                  className="w-80 h-52"
                  src={`${i.snippet.thumbnails.medium.url}`}
                  alt=""
                />
                <span className="absolute bottom-0 right-1 rounded-sm text-white bg-black text-xs px-0.5 mb-1">
                  {/*{videoDuration(i.contentDetails.duration)}*/}
                </span>
              </div>
              <div className="p-4 md:pt-4 w-[45%] ">
                <p className="flex flex-col">
                  <span className="text-sm font-semibold line-clamp-2">
                    {i.snippet.title}
                  </span>
                  <span className="text-xs font-light">
                    <span className="after:content-['_•'] mr-1">
                      {/*{viewCount(i.statistics.viewCount)} views*/}
                    </span>
                    <span>{timeSinceLoadingVideo(i.snippet.publishedAt)}</span>
                  </span>
                  <span className="py-1 text-xs font-light flex items-center">
                    <img
                      className="inline rounded-full mr-4 float-left w-10 h-10"
                      src={`${i.channelThumbnail}`}
                      alt=""
                    />
                    {i.snippet.channelTitle}
                  </span>
                  <span>{i.snippet.description}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
