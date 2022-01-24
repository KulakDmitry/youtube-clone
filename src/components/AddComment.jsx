import React, { Component } from "react";
import defaultAvatar from "../icons/profileDefaultAvatar.jpg";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }

  clearInput = () => {
    this.setState({
      comment: "",
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { comment } = this.state;
    const { handleAddComment } = this.props;

    if (!comment.trim()) {
      return;
    }
    handleAddComment(comment);
    this.clearInput();
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  render() {
    const { comment } = this.state;
    const { state } = this.props;

    const isDisabled = !comment.trim();
    return (
      <div className="flex items-center">
        <img
          className="rounded-full w-12 h-12 mb-4"
          src={
            state.user && state.user.profileSrc
              ? state.user.profileSrc
              : defaultAvatar
          }
          alt=""
        />

        <form className="flex flex-col p-4 w-full" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a public comment..."
            name="comment"
            className="w-full mr-4 px-4 py-2 text-grey-400 text-sm border-b focus:outline-none focus:border-b-black"
            onChange={this.handleCommentChange}
            value={comment}
          />
          <button
            type="submit"
            className={`mt-2 ml-auto text-sm  font-base px-4 py-2  ${
              isDisabled
                ? "text-gray-400 bg-gray-200"
                : "text-white  bg-blue-500 "
            }`}
            disabled={isDisabled}
          >
            COMMENT
          </button>
        </form>
      </div>
    );
  }
}

export default AddComment;
