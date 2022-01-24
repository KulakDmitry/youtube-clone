import React, { Component } from "react";
import { ReactComponent as LikeIcon } from "../icons/like-icon.svg";
import { ReactComponent as DislikeIcon } from "../icons/dislike-icon.svg";
import AddComment from "./AddComment";
import moment from "moment";

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
    const {
      comments,
      commentInput,
      onAddComment,
      currentUser,
      timeSinceLoadingVideo,
      handleAddComment,
      state,
    } = this.props;
    const { commentSlice } = this.state;

    return (
      <>
        {currentUser && (
          <AddComment handleAddComment={handleAddComment} state={state} />
        )}

        {state.videoComments?.slice(0, commentSlice).map((i) => (
          <div key={i.id} className="flex p-3 md:p-0 md:py-8">
            <div>
              <img
                className="rounded-full cursor-pointer w-12 h-12"
                src={
                  i.snippet
                    ? i.snippet.topLevelComment.snippet.authorProfileImageUrl
                    : i.videoComment.authorProfileImageUrl
                }
                alt=""
              />
            </div>
            <div className="flex flex-col pl-4 w-[95%]">
              <p>
                <a
                  href={
                    i.snippet
                      ? i.snippet.topLevelComment.snippet.authorChannelUrl
                      : null
                  }
                  className="text-sm font-semibold pr-2 cursor-pointer"
                >
                  {i.snippet
                    ? i.snippet.topLevelComment.snippet.authorDisplayName
                    : i.videoComment.authorDisplayName}
                </a>
                <span className=" text-xs text-gray-500">
                  {timeSinceLoadingVideo(
                    i.snippet
                      ? i.snippet.topLevelComment.snippet.publishedAt
                      : i.videoComment.publishedAt
                  )}
                </span>
              </p>
              <span className="text-sm">
                {i.snippet
                  ? i.snippet.topLevelComment.snippet.textOriginal
                  : i.videoComment.textOriginal}
              </span>
              <div className="flex items-center pt-4">
                <LikeIcon className="w-4 h-4 cursor-pointer" />
                <span className="text-xs text-gray-600 pr-6 pl-2">
                  {i.snippet
                    ? i.snippet.topLevelComment.snippet.likeCount
                    : i.videoComment.likeCount}
                </span>
                <DislikeIcon className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
        {state.videoComments?.length > 5 &&
          commentSlice < state.videoComments.length && (
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

export default Comments;
