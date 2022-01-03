import React, { Component } from "react";
import Header from "./Header";
import { ReactComponent as LikeIcon } from "../icons/like-icon.svg";
import { ReactComponent as DislikeIcon } from "../icons/dislike-icon.svg";

class MainVideoPage extends Component {
  render() {
    const {
      handleModalApps,
      handleModalSettings,
      visibleApps,
      visibleSettings,
    } = this.props;
    return (
      <div>
        <Header
          handleModalApps={handleModalApps}
          handleModalSettings={handleModalSettings}
          visibleApps={visibleApps}
          visibleSettings={visibleSettings}
        />
        <div className="flex justify-between py-20 px-6 bg-gray-50">
          <div className="w-2/3">
            <img src="https://picsum.photos/950/550" alt="" />
            <div className="border-b pb-4">
              <p className="pt-8 text-xl">Lorem ipsum dolor sit amet.</p>
              <p className="pt-2 text-sm text-gray-500">
                372,175 views / Jul 16, 2019
              </p>
              <div className="flex justify-end mr-32 text-sm ">
                <button className="flex items-center mr-8">
                  <LikeIcon className="w-5 h-5 mx-2" />
                  <span className="font-medium">12K</span>
                </button>
                <button className="flex items-center">
                  <DislikeIcon className="w-5 h-5 mx-2" />
                  <span className="font-medium">DISLIKE</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/3 pl-7">
            <div className="flex mb-2 cursor-pointer">
              <img src="https://picsum.photos/180/100" alt="" />
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
                <span className="absolute bottom-1 right-64 mr-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <img src="https://picsum.photos/180/100" alt="" />
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
                <span className="absolute bottom-1 right-64 mr-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <img src="https://picsum.photos/180/100" alt="" />
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
                <span className="absolute bottom-1 right-64 mr-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <img src="https://picsum.photos/180/100" alt="" />
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
                <span className="absolute bottom-1 right-64 mr-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <img src="https://picsum.photos/180/100" alt="" />
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
                <span className="absolute bottom-1 right-64 mr-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <img src="https://picsum.photos/180/100" alt="" />
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
                <span className="absolute bottom-1 right-64 mr-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <img src="https://picsum.photos/180/100" alt="" />
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
                <span className="absolute bottom-1 right-64 mr-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <img src="https://picsum.photos/180/100" alt="" />
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
                <span className="absolute bottom-1 right-64 mr-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <img src="https://picsum.photos/180/100" alt="" />
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
                <span className="absolute bottom-1 right-64 mr-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainVideoPage;
