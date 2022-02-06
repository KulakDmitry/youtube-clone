import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MainPageTags extends Component {
  render() {
    const { openSideBar } = this.props;
    const arr = [
      "Podcasts",
      "Music",
      "Drawing",
      "Computer",
      "Space",
      "Comedy Club",
      "Live",
      "Music",
      "Drawing",
      "Computer",
      "Space",
      "Comedy Club",
      "Podcasts",
      "Music",
      "Drawing",
      "Computer",
      "Space",
      "Comedy Club",
    ];
    return (
      <div
        className={`${
          openSideBar ? "ml-64 md:ml-64" : "ml-16"
        } hidden md:z-20 md:bg-white md:flex md:pt-16 md:pl-6  md:border-b md:py-3 md:overflow-auto md:space-x-3 md:whitespace-nowrap text-sm`}
      >
        <p className="border rounded-full bg-black p-1 px-3 cursor-pointer text-white">
          All
        </p>
        {arr.map((i, idx) => (
          <p
            key={idx}
            className="border rounded-full bg-gray-100 hover:bg-gray-200 transition duration-150 p-1 px-3 cursor-pointer"
          >
            {i}
          </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    openSideBar: state.modalWindows.openSideBar,
  };
};

export default connect(mapStateToProps)(MainPageTags);

MainPageTags.propTypes = {
  openSideBar: PropTypes.bool.isRequired,
};
