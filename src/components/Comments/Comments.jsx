import React, { Component } from "react";
import { ReactComponent as LikeIcon } from "../../icons/like-icon.svg";
import { ReactComponent as DislikeIcon } from "../../icons/dislike-icon.svg";
import AddComment from "./AddComment";
import { connect } from "react-redux";
import { timeSinceLoadingVideo } from "../../utils/timeSinceLoadingVideo";
import PropTypes from "prop-types";

const COMMENTS_MIN_COUNT = 5;

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentSlice: COMMENTS_MIN_COUNT,
    };
  }

  handleViewMoreComments = () => {
    const { commentSlice } = this.state;
    this.setState({
      commentSlice: commentSlice + COMMENTS_MIN_COUNT,
    });
  };

  render() {
    const { currentUser, videoComments, videoInfo } = this.props;
    const { commentSlice } = this.state;

    return (
      <>
        {currentUser && (
          <AddComment videoInfo={videoInfo} currentUser={currentUser} />
        )}
        {videoComments?.slice(0, commentSlice).map((videoComment) => (
          <div key={videoComment.id} className="flex p-3 md:p-0 md:py-8">
            <div>
              <img
                className="rounded-full cursor-pointer w-12 h-12"
                src={
                  videoComment.snippet
                    ? videoComment.snippet.topLevelComment.snippet
                        .authorProfileImageUrl
                    : videoComment.videoComment.authorProfileImageUrl
                }
                alt=""
              />
            </div>
            <div className="flex flex-col pl-4 w-[95%]">
              <p>
                <a
                  href={
                    videoComment.snippet
                      ? videoComment.snippet.topLevelComment.snippet
                          .authorChannelUrl
                      : null
                  }
                  className="text-sm font-semibold pr-2 cursor-pointer"
                >
                  {videoComment.snippet
                    ? videoComment.snippet.topLevelComment.snippet
                        .authorDisplayName
                    : videoComment.videoComment.authorDisplayName}
                </a>
                <span className=" text-xs text-gray-500">
                  {timeSinceLoadingVideo(
                    videoComment.snippet
                      ? videoComment.snippet.topLevelComment.snippet.publishedAt
                      : videoComment.videoComment.publishedAt
                  )}
                </span>
              </p>
              <span className="text-sm">
                {videoComment.snippet
                  ? videoComment.snippet.topLevelComment.snippet.textOriginal
                  : videoComment.videoComment.textOriginal}
              </span>
              <div className="flex items-center pt-4">
                <LikeIcon className="w-4 h-4 cursor-pointer" />
                <span className="text-xs text-gray-600 pr-6 pl-2">
                  {videoComment.snippet
                    ? videoComment.snippet.topLevelComment.snippet.likeCount
                    : videoComment.videoComment.likeCount}
                </span>
                <DislikeIcon className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
        {videoComments?.length > 5 && commentSlice < videoComments.length && (
          <button
            onClick={this.handleViewMoreComments}
            type="button"
            className="ml-4 text-sm cursor-pointer text-gray-400"
          >
            SHOW MORE
          </button>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videoComments: state.commentsData.videoComments,
  };
};

export default connect(mapStateToProps)(Comments);

Comments.defaultProps = {
  currentUser: null,
};

Comments.propTypes = {
  currentUser: PropTypes.object,
  videoComments: PropTypes.array.isRequired,
  videoInfo: PropTypes.object.isRequired,
};
