import React, { Component } from "react";
import { ReactComponent as HomeButton } from "../icons/home.svg";
import { ReactComponent as ExploreButton } from "../icons/explore.svg";
import { ReactComponent as MusicButton } from "../icons/music-icon.svg";
import { ReactComponent as SportButton } from "../icons/sport-icon.svg";
import { ReactComponent as GamingButton } from "../icons/gaming-icon.svg";
import { ReactComponent as NewsButton } from "../icons/news-icon.svg";
import { ReactComponent as LiveButton } from "../icons/live-icon.svg";
import { ReactComponent as VRButton } from "../icons/360-video-icon.svg";

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col w-60 border-gray-400 mt-4">
          <button className="flex items-center px-6 py-2 hover:bg-gray-100">
            <HomeButton className="w-5 mr-5" />
            <span>Home</span>
          </button>

          <button className="flex items-center px-6 py-2 hover:bg-gray-100">
            <ExploreButton className="w-5 mr-5" />
            <span>Explore</span>
          </button>

          <p className="ml-5 pt-3 text-gray-500 border-t">BEST OF YOUTUBE</p>

          <button className="flex items-center px-6 py-2 hover:bg-gray-100">
            <MusicButton className="w-5 h-5 mr-5" />
            <span>Music</span>
          </button>
          <button className="flex items-center px-6 py-2 hover:bg-gray-100">
            <SportButton className="w-5 h-5 mr-5" />
            <span>Sport</span>
          </button>
          <button className="flex items-center px-6 py-2 hover:bg-gray-100">
            <GamingButton className="w-5 h-5 mr-5" />
            <span>Games</span>
          </button>
          <button className="flex items-center px-6 py-2 hover:bg-gray-100">
            <NewsButton className="w-5 h-5 mr-5" />
            <span>News</span>
          </button>
          <button className="flex items-center px-6 py-2 hover:bg-gray-100">
            <LiveButton className="w-5 h-5 mr-5" />
            <span>Live</span>
          </button>
          <button className="flex items-center px-6 py-2 hover:bg-gray-100">
            <VRButton className="w-5 h-5 mr-5" />
            <span>360° video</span>
          </button>
        </div>

        {/*<div className="flex justify-evenly">*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    All*/}
        {/*  </p>*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    JS*/}
        {/*  </p>*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    Python*/}
        {/*  </p>*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    Drawing*/}
        {/*  </p>*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    Computer*/}
        {/*  </p>*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    Space*/}
        {/*  </p>*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    Sales*/}
        {/*  </p>*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    Sales*/}
        {/*  </p>*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    Sales*/}
        {/*  </p>*/}
        {/*  <p className="border rounded-full bg-gray-100 p-1 px-3 cursor-pointer">*/}
        {/*    Sales*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default MainPage;
