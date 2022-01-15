import React, { Component } from "react";
import { ReactComponent as HomeButton } from "../icons/home.svg";
import { ReactComponent as ExploreButton } from "../icons/explore.svg";
import { ReactComponent as MusicButton } from "../icons/music-icon.svg";
import { ReactComponent as SportButton } from "../icons/sport-icon.svg";
import { ReactComponent as GamingButton } from "../icons/gaming-icon.svg";
import { ReactComponent as NewsButton } from "../icons/news-icon.svg";
import { ReactComponent as LiveButton } from "../icons/live-icon.svg";
import { ReactComponent as VRButton } from "../icons/360-video-icon.svg";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    const { state, handleChoose } = this.props;
    return (
      <>
        <div className="fixed w-full z-10 hidden md:block">
          {state.openSideBar ? (
            <div className="flex fixed  flex-col w-60 border-gray-400 mt-16 text-sm z-30 ">
              <Link
                to="/"
                onClick={() => handleChoose("home")}
                className={
                  state.isChoose === "home"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <HomeButton className="w-5 h-6 mr-5" />
                <span>Home</span>
              </Link>

              <Link
                to="/explore"
                onClick={() => handleChoose("explore")}
                className={
                  state.isChoose === "explore"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <ExploreButton className="w-5 h-6 mr-5" />
                <span>Explore</span>
              </Link>

              <p className="ml-5 pt-3 text-gray-500 border-t">
                BEST OF YOUTUBE
              </p>

              <button
                onClick={() => handleChoose("music")}
                className={
                  state.isChoose === "music"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <MusicButton className="w-5 h-5 mr-5" />
                <span>Music</span>
              </button>
              <button
                onClick={() => handleChoose("sport")}
                className={
                  state.isChoose === "sport"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <SportButton className="w-5 h-5 mr-5" />
                <span>Sport</span>
              </button>
              <button
                onClick={() => handleChoose("games")}
                className={
                  state.isChoose === "games"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <GamingButton className="w-5 h-5 mr-5" />
                <span>Games</span>
              </button>
              <button
                onClick={() => handleChoose("news")}
                className={
                  state.isChoose === "news"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <NewsButton className="w-5 h-5 mr-5" />
                <span>News</span>
              </button>
              <button
                onClick={() => handleChoose("live")}
                className={
                  state.isChoose === "live"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <LiveButton className="w-5 h-5 mr-5" />
                <span>Live</span>
              </button>
              <button
                onClick={() => handleChoose("360 video")}
                className={
                  state.isChoose === "360 video"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <VRButton className="w-5 h-5 mr-5" />
                <span>360° video</span>
              </button>
            </div>
          ) : (
            <div className="flex fixed flex-col w-16 border-gray-400 mt-16 text-sm z-30">
              <Link
                to="/"
                onClick={() => handleChoose("home")}
                className={
                  state.isChoose === "home"
                    ? "flex flex-col items-center pl-1 py-2 bg-gray-200 hover:bg-gray-300 font-semibold text-xs"
                    : "flex flex-col items-center pl-1 py-2 hover:bg-gray-100 font-light text-xs"
                }
              >
                <HomeButton className="w-5 h-6" />
                <span>Home</span>
              </Link>

              <Link
                to="/explore"
                onClick={() => handleChoose("explore")}
                className={
                  state.isChoose === "explore"
                    ? "flex flex-col items-center pl-1 py-2 bg-gray-200 hover:bg-gray-300 font-semibold text-xs"
                    : "flex flex-col items-center pl-1 py-2 hover:bg-gray-100 font-light text-xs"
                }
              >
                <ExploreButton className="w-5 h-6" />
                <span>Explore</span>
              </Link>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default MainPage;
