import React, { Component } from "react";
import AsideMenu from "./AsideMenu";
import { Link } from "react-router-dom";
import { ReactComponent as FilterIcon } from "../icons/filter-icon.svg";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  handleOpenFilters = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const {
      state,
      handleChoose,
      timeSinceLoadingVideo,
      videoDuration,
      viewCount,
      handleGetVideoSearchInfo,
      handleSortSearch,
      currentUser,
    } = this.props;

    const sortBy = ["Date", "Rating", "Relevance", "ViewCount"];

    return (
      <div>
        <AsideMenu
          state={state}
          handleChoose={handleChoose}
          currentUser={currentUser}
        />
        <div
          className={` ${
            state.openSideBar
              ? "flex flex-col md:ml-64 md:p-14"
              : "flex flex-col md:ml-16 md:p-52"
          }  m-0 pt-20 md:pt-20 md:bg-gray-50 md:h-full `}
        >
          {state.searchVideoData.length ? (
            <div>
              <div className="pl-4 md:p-0 md:pb-2 mb-8 border-b border-gray-300">
                <button
                  onClick={this.handleOpenFilters}
                  className="flex items-center cursor-pointer"
                >
                  <FilterIcon className="w-5 h-5" />
                  <span className="pl-3 text-gray-600 font-semibold text-sm">
                    SORT BY
                  </span>
                </button>
              </div>
              {this.state.isOpen && (
                <div className="flex justify-evenly md:py-2 my-8 md:w-[60%]">
                  {sortBy.map((i, idx) => (
                    <button
                      className="text-sm text-gray-600"
                      key={idx}
                      onClick={handleSortSearch}
                      value={`${i}`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              )}
              {state.searchVideoData.map((i) => (
                <Link
                  onClick={() => handleGetVideoSearchInfo(i)}
                  to={`/video/${i.id.videoId}`}
                  key={i.id.videoId}
                  className="px-2 md:p-0 flex mb-3"
                >
                  <div className="relative w-32 h-20 md:w-72 md:h-40">
                    <img
                      className="w-32 h-20  md:w-72 md:h-40"
                      src={`${i.snippet.thumbnails.medium.url}`}
                      alt=""
                    />
                    <span className="absolute bottom-0 right-1 rounded-sm text-white bg-black text-xs px-0.5 mb-1">
                      {videoDuration(i.duration)}
                    </span>
                  </div>
                  <div className="pl-4 md:p-4 md:pt-0 md:w-[45%] w-[60%] ">
                    <p className="flex flex-col">
                      <span className="text-base font-semibold line-clamp-2">
                        {i.snippet.title}
                      </span>
                      <span className="text-xs font-light pt-0.5 md:p-0 md:py-2">
                        <span className="after:content-['_•'] mr-1">
                          {viewCount(i.views)} views
                        </span>
                        <span>
                          {timeSinceLoadingVideo(i.snippet.publishedAt)}
                        </span>
                      </span>
                      <span className="py-1 text-xs font-light flex items-center">
                        <img
                          className="hidden md:inline rounded-full mr-4 float-left w-10 h-10"
                          src={`${i.channelThumbnail}`}
                          alt=""
                        />
                        {i.snippet.channelTitle}
                      </span>
                      <span className="hidden md:block text-xs md:line-clamp-2">
                        {i.snippet.description}
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <span>not found</span>
          )}
        </div>
      </div>
    );
  }
}

export default SearchPage;
