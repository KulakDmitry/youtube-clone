import React, { Component } from "react";

class MainPageTags extends Component {
  render() {
    const { state } = this.props;
    const arr = [
      "JS",
      "Python",
      "Drawing",
      "Computer",
      "Space",
      "Sales Sales",
      "JS",
      "Python",
      "Drawing",
      "Computer",
      "Space",
      "Sales Sales",
      "JS",
      "Python",
      "Drawing",
      "Computer",
      "Space",
      "Sales Sales",
    ];
    return (
      <div
        className={`${
          state.openSideBar ? "ml-64" : "ml-16"
        } hidden md:z-20 md:bg-white md:flex md:pt-16 md:pl-6 md:ml-64 md:border-b md:py-3 md:overflow-auto md:space-x-3 md:whitespace-nowrap text-sm`}
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

export default MainPageTags;
