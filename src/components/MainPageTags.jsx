import React, { Component } from "react";

class MainPageTags extends Component {
  render() {
    const { state } = this.props;
    return (
      <div
        className={`${
          state.openSideBar ? "ml-64" : "ml-16"
        } hidden md:z-20 md:bg-white md:flex md:pt-16 md:pl-6 md:ml-64 md:border-b md:py-3 md:overflow-auto md:space-x-3 md:whitespace-nowrap text-sm`}
      >
        <p className="border rounded-full bg-black p-1 px-3 cursor-pointer text-white">
          All
        </p>
        <p className="border rounded-full bg-gray-100 hover:bg-gray-200 transition duration-150 p-1 px-3 cursor-pointer">
          JS
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Python
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Drawing
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Computer
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Space
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
        <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">
          Sales
        </p>
      </div>
    );
  }
}

export default MainPageTags;
