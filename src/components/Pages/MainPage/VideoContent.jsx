import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getVideo } from "../../../store/videoContentDataSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { convertCount } from "../../../utils/convertCount";
import { getCommentsData } from "../../../store/commentsDataSlice";
import { getVideoInfo } from "../../../store/videoInfoSlice";
import { videoDuration } from "../../../utils/videoDurationConvert";
import { timeSinceLoadingVideo } from "../../../utils/timeSinceLoadingVideo";
import PropTypes from "prop-types";

class VideoContent extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { dispatch } = this.props;
    dispatch(getVideo());
  };

  handleGetVideoInfo = async (video) => {
    const { dispatch } = this.props;
    dispatch(getCommentsData(video.id));
    await dispatch(getVideoInfo(video));
  };

  render() {
    const { openSideBar, videos } = this.props;

    return (
      <InfiniteScroll
        dataLength={videos.length}
        next={this.fetchData}
        hasMore={true}
      >
        <div
          className={` ${
            openSideBar
              ? "grid gap-x-4 gap-y-8 md:grid-cols-2 md:ml-64 lg:grid-cols-4"
              : "grid gap-x-4 gap-y-8 md:grid-cols-3 md:ml-16 lg:grid-cols-5 "
          } pt-20 md:pt-6 md:bg-gray-50 md:h-full md:p-14`}
        >
          {videos.map((video, index) => (
            <Link
              onClick={() => this.handleGetVideoInfo(video)}
              to={`/video/${video.id}`}
              key={index}
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={`${video.snippet.thumbnails.medium.url}`}
                  alt=""
                />
                <span className="absolute bottom-0 right-1 rounded-sm text-white bg-black text-xs px-0.5 mb-1">
                  {videoDuration(video.contentDetails.duration)}
                </span>
              </div>
              <div className="p-4 md:pt-4 ">
                <img
                  className="inline rounded-full mr-4 float-left w-10 h-10"
                  src={`${video.channelThumbnail}`}
                  alt=""
                />
                <p className="flex flex-col">
                  <span className="text-sm font-semibold line-clamp-2">
                    {video.snippet.title}
                  </span>
                  <span className="py-1 text-xs font-light">
                    {video.snippet.channelTitle}
                  </span>

                  <span className="text-xs font-light">
                    <span className="after:content-['_•'] mr-1">
                      {convertCount(video.statistics.viewCount)} views
                    </span>
                    <span>
                      {timeSinceLoadingVideo(video.snippet.publishedAt)}
                    </span>
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videoContentData.video,
    openSideBar: state.modalWindows.openSideBar,
  };
};

export default connect(mapStateToProps)(VideoContent);

VideoContent.propTypes = {
  openSideBar: PropTypes.bool.isRequired,
  videos: PropTypes.array.isRequired,
};
