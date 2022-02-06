import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FilterIcon } from "../../icons/filter-icon.svg";
import { connect } from "react-redux";
import { clearData, getSearchSortData } from "../../store/searchDataSlice";
import { ReactComponent as Spinner } from "../../icons/spinner.svg";
import { loadingFalse, loadingTrue } from "../../store/loadingSlice";
import { convertCount } from "../../utils/convertCount";
import { getCommentsData } from "../../store/commentsDataSlice";
import { getVideoSearchInfo } from "../../store/videoInfoSlice";
import { videoDuration } from "../../utils/videoDurationConvert";
import { timeSinceLoadingVideo } from "../../utils/timeSinceLoadingVideo";
import PropTypes from "prop-types";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleSortSearch = async (e) => {
    const { searchText, dispatch } = this.props;

    await dispatch(clearData());
    await dispatch(loadingTrue());
    dispatch(getSearchSortData({ searchText, e }));
    await dispatch(loadingFalse());
  };
  handleOpenFilters = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  handleGetVideoSearchInfo = (video) => {
    const { dispatch } = this.props;
    dispatch(getCommentsData(video.id.videoId));
    dispatch(getVideoSearchInfo(video));
  };

  render() {
    const { openSideBar, searchVideoData, isLoading } = this.props;

    const sortBy = ["Date", "Rating", "Relevance", "ViewCount"];

    return (
      <div>
        <div
          className={` ${
            openSideBar
              ? "flex flex-col md:ml-64 md:p-14"
              : "flex flex-col md:ml-16 md:p-52"
          }  m-0 pt-20 md:pt-20 md:bg-gray-50 md:h-full `}
        >
          {isLoading ? (
            <Spinner className="animate-spin h-20 w-20 absolute top-[40%] right-[40%] md:right-[50%]" />
          ) : (
            <div>
              {searchVideoData.length ? (
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
                          onClick={this.handleSortSearch}
                          value={`${i}`}
                        >
                          {i}
                        </button>
                      ))}
                    </div>
                  )}
                  {searchVideoData.map((i) => (
                    <Link
                      onClick={() => this.handleGetVideoSearchInfo(i)}
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
                              {convertCount(i.views)} views
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
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchVideoData: state.searchData.searchVideoData,
    searchText: state.searchData.searchText,
    isLoading: state.loading.isLoading,
    openSideBar: state.modalWindows.openSideBar,
  };
};

export default connect(mapStateToProps)(SearchPage);

SearchPage.propTypes = {
  openSideBar: PropTypes.bool.isRequired,
  searchVideoData: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
