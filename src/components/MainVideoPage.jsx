import React, { Component } from "react";
import Header from "./Header";
import { ReactComponent as LikeIcon } from "../icons/like-icon.svg";
import { ReactComponent as DislikeIcon } from "../icons/dislike-icon.svg";
import { ReactComponent as SubscribeIcon } from "../icons/subscribe-youtube.svg";
import { ReactComponent as HomeButton } from "../icons/home.svg";
import { ReactComponent as ExploreButton } from "../icons/explore.svg";
import { ReactComponent as YoutubeLogo } from "../icons/YouTubeLogo.svg";
import { ReactComponent as MusicButton } from "../icons/music-icon.svg";
import { ReactComponent as SportButton } from "../icons/sport-icon.svg";
import { ReactComponent as GamingButton } from "../icons/gaming-icon.svg";
import { ReactComponent as NewsButton } from "../icons/news-icon.svg";
import { ReactComponent as LiveButton } from "../icons/live-icon.svg";
import { ReactComponent as VRButton } from "../icons/360-video-icon.svg";

class MainVideoPage extends Component {
  render() {
    const {
      openSideBar,
      handleSideBar,
      handleModalApps,
      handleModalSettings,
      visibleApps,
      visibleSettings,
      handleChoose,
      state,
    } = this.props;
    return (
      <div>
        <Header
          handleSideBar={handleSideBar}
          handleModalApps={handleModalApps}
          handleModalSettings={handleModalSettings}
          visibleApps={visibleApps}
          visibleSettings={visibleSettings}
        />
        {!openSideBar && (
          <div className="flex fixed flex-col w-60 border-gray-400 mt-14 text-sm z-30 bg-white h-screen ">
            <button
              onClick={() => handleChoose("home")}
              className={
                state.isChoose === "home"
                  ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                  : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
              }
            >
              {/*<button onClick={() => this.setState({activeBtnId: 'button2'})} className={this.state.activeBtnId === 'button2' ? 'active' : null}/>*/}
              <HomeButton className="w-5 h-6 mr-5" />
              <span>Home</span>
            </button>

            <button
              onClick={() => handleChoose("explore")}
              className={
                state.isChoose === "explore"
                  ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                  : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
              }
            >
              <ExploreButton className="w-5 h-6 mr-5" />
              <span>Explore</span>
            </button>

            <p className="ml-5 pt-3 text-gray-500 border-t">BEST OF YOUTUBE</p>

            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <MusicButton className="w-5 h-5 mr-5" />
              <span>Music</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <SportButton className="w-5 h-5 mr-5" />
              <span>Sport</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <GamingButton className="w-5 h-5 mr-5" />
              <span>Games</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <NewsButton className="w-5 h-5 mr-5" />
              <span>News</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <LiveButton className="w-5 h-5 mr-5" />
              <span>Live</span>
            </button>
            <button className="flex items-center px-6 py-2 hover:bg-gray-100 font-light">
              <VRButton className="w-5 h-5 mr-5" />
              <span>360° video</span>
            </button>
          </div>
        )}

        <div className="flex py-20 px-14 bg-gray-50">
          <div className="w-2/3">
            <img
              className="w-full"
              src="https://picsum.photos/950/550"
              alt=""
            />
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
            <div className="flex items-center border-b pb-10">
              <div>
                <img
                  className="rounded-full cursor-pointer"
                  src="https://picsum.photos/50/50"
                  alt=""
                />
              </div>
              <div className="flex flex-col pl-4 mt-10">
                <span className="text-sm font-semibold cursor-pointer">
                  channelName
                </span>
                <span className="text-xs text-gray-600">820 subscribers</span>
                <span className="text-sm pt-6">description</span>
              </div>
              <div className="ml-auto ">
                <SubscribeIcon className="w-32 h-32 cursor-pointer" />
              </div>
            </div>
            <div className="pt-6">
              <div>4 Comments</div>
              <div className="flex py-8">
                <div>
                  <img
                    className="rounded-full cursor-pointer"
                    src="https://picsum.photos/40/40"
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <p>
                    <span className="text-sm font-semibold pr-2 cursor-pointer">
                      userName
                    </span>
                    <span className=" text-xs text-gray-500">9 month ago</span>
                  </p>
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore, error!
                  </span>
                  <div className="flex items-center pt-4">
                    <LikeIcon className="w-4 h-4 cursor-pointer" />
                    <span className="text-xs text-gray-600 pr-6 pl-2">412</span>
                    <DislikeIcon className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex py-8">
                <div>
                  <img
                    className="rounded-full cursor-pointer"
                    src="https://picsum.photos/40/40"
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <p>
                    <span className="text-sm font-semibold pr-2 cursor-pointer">
                      userName
                    </span>
                    <span className=" text-xs text-gray-500">9 month ago</span>
                  </p>
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore, error!
                  </span>
                  <div className="flex items-center pt-4">
                    <LikeIcon className="w-4 h-4 cursor-pointer" />
                    <span className="text-xs text-gray-600 pr-6 pl-2">412</span>
                    <DislikeIcon className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex py-8">
                <div>
                  <img
                    className="rounded-full cursor-pointer"
                    src="https://picsum.photos/40/40"
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <p>
                    <span className="text-sm font-semibold pr-2 cursor-pointer">
                      userName
                    </span>
                    <span className=" text-xs text-gray-500">9 month ago</span>
                  </p>
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore, error!
                  </span>
                  <div className="flex items-center pt-4">
                    <LikeIcon className="w-4 h-4 cursor-pointer" />
                    <span className="text-xs text-gray-600 pr-6 pl-2">412</span>
                    <DislikeIcon className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex py-8">
                <div>
                  <img
                    className="rounded-full cursor-pointer"
                    src="https://picsum.photos/40/40"
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <p>
                    <span className="text-sm font-semibold pr-2 cursor-pointer">
                      userName
                    </span>
                    <span className=" text-xs text-gray-500">9 month ago</span>
                  </p>
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore, error!
                  </span>
                  <div className="flex items-center pt-4">
                    <LikeIcon className="w-4 h-4 cursor-pointer" />
                    <span className="text-xs text-gray-600 pr-6 pl-2">412</span>
                    <DislikeIcon className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 pl-7">
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
                </span>
              </p>
            </div>
            <div className="flex mb-2 cursor-pointer">
              <div className="relative">
                <img src="https://picsum.photos/180/100" alt="" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs font-medium rounded-sm px-0.5">
                  12:12
                </span>
              </div>
              <p className="flex flex-col px-4 relative">
                <span className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
                <span className="text-xs text-gray-500 my-1 ">channelName</span>
                <span className="text-xs text-gray-500">
                  48K view / 1 month ago
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
