import React, { Component } from "react";
import { Link } from "react-router-dom";

class VideoContent extends Component {
  render() {
    const { state, timeSinceLoadingVideo, videoDuration, viewCount } =
      this.props;

    return (
      <div
        className={` ${
          state.openSideBar
            ? "grid gap-x-4 gap-y-8 md:grid-cols-2 md:ml-64 lg:grid-cols-4"
            : "grid gap-x-4 gap-y-8 md:grid-cols-3 md:ml-16 lg:grid-cols-5 "
        } pt-20 md:pt-32 md:bg-gray-50 md:h-full md:p-14`}
      >
        {state.video.map((i) => (
          <Link to="/video" key={i.id}>
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
            <div className="p-4 md:pt-4 ">
              <img
                className="inline rounded-full mr-4 float-left w-10 h-10"
                src={`${i.channelThumbnail}`}
                alt=""
              />
              <p className="flex flex-col">
                <span className="text-sm font-semibold line-clamp-2">
                  {i.snippet.title}
                </span>
                <span className="py-1 text-xs font-light">
                  {i.snippet.channelTitle}
                </span>

                <span className="text-xs font-light">
                  <span className="after:content-['_•'] mr-1">
                    {viewCount(i.statistics.viewCount)} views
                  </span>
                  <span>{timeSinceLoadingVideo(i.snippet.publishedAt)}</span>
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default VideoContent;
