import React from "react";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { convertCount } from "../utils/convertCount";
import { connect } from "react-redux";
import { videoDuration } from "../utils/videoDurationConvert";
import { timeSinceLoadingVideo } from "../utils/timeSinceLoadingVideo";

const RenderVideoList = ({ video, handleGetVideoInfo }) => {
  return (
    <Link
      onClick={() => handleGetVideoInfo(video)}
      to={`/video/${video.id}`}
      className="md:flex mt-4"
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
      <div className="pt-1 ml-6 mb-10 md:mb-0 md:w-[40%]">
        <span className="text-lg font-medium line-clamp-2">
          {video.snippet.title}
        </span>
        <span className="py-1 text-xs font-light after:content-['_•'] mr-1">
          {video.snippet.channelTitle}
        </span>
        <span className="text-xs font-light">
          <span className="after:content-['_•'] mr-1">
            {convertCount(video.statistics.viewCount)} views
          </span>
          <span>
            {timeSinceLoadingVideo(DateTime.fromISO(video.snippet.publishedAt))}
          </span>
        </span>
        <p className="hidden md:block md:line-clamp-2 md:text-xs md:mt-4">
          {video.snippet.description}
        </p>
      </div>
    </Link>
  );
};

export default connect()(RenderVideoList);
