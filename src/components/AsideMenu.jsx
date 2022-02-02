import React, { Component } from "react";
import { ReactComponent as HomeButton } from "../icons/home.svg";
import { ReactComponent as ExploreButton } from "../icons/explore.svg";
import { ReactComponent as SubscriptionsButton } from "../icons/subscriptions-icon.svg";
import { ReactComponent as LikeButton } from "../icons/like-icon.svg";
import { ReactComponent as MusicButton } from "../icons/music-icon.svg";
import { ReactComponent as SportButton } from "../icons/sport-icon.svg";
import { ReactComponent as GamingButton } from "../icons/gaming-icon.svg";
import { ReactComponent as NewsButton } from "../icons/news-icon.svg";
import { ReactComponent as LiveButton } from "../icons/live-icon.svg";
import { ReactComponent as VRButton } from "../icons/360-video-icon.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AsideMenu extends Component {
  render() {
    const { handleChoose, currentUser, isChoose, openSideBar } = this.props;
    return (
      <>
        <div className="fixed w-full z-10">
          {openSideBar ? (
            <div className="flex fixed mt-14 left-0 right-0 bg-white bottom-0 top-0  flex-col md:w-60 border-gray-400 md:mt-16 text-sm z-30 ">
              <Link
                to="/"
                onClick={() => handleChoose("home")}
                className={
                  isChoose === "home"
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
                  isChoose === "explore"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <ExploreButton className="w-5 h-6 mr-5" />
                <span>Explore</span>
              </Link>

              {currentUser && currentUser.displayName ? (
                <>
                  <Link
                    to="/subscriptions"
                    onClick={() => handleChoose("subscriptions")}
                    className={
                      isChoose === "subscriptions"
                        ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                        : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                    }
                  >
                    <SubscriptionsButton className="w-5 h-6 mr-5" />
                    <span>Subscriptions</span>
                  </Link>

                  <Link
                    to="/liked-videos"
                    onClick={() => handleChoose("liked-videos")}
                    className={
                      isChoose === "liked-videos"
                        ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                        : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                    }
                  >
                    <LikeButton className="w-5 h-6 mr-5" />
                    <span>Liked videos</span>
                  </Link>
                </>
              ) : null}

              <p className="ml-5 pt-3 text-gray-500 border-t">
                BEST OF YOUTUBE
              </p>

              <button
                onClick={() => handleChoose("music")}
                className={
                  isChoose === "music"
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
                  isChoose === "sport"
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
                  isChoose === "games"
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
                  isChoose === "news"
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
                  isChoose === "live"
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
                  isChoose === "360 video"
                    ? "flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
                    : "flex items-center px-6 py-2 hover:bg-gray-100 font-light"
                }
              >
                <VRButton className="w-5 h-5 mr-5" />
                <span>360° video</span>
              </button>
            </div>
          ) : (
            <div className="hidden md:flex md:fixed flex-col w-16 border-gray-400 mt-16 text-sm z-30">
              <Link
                to="/"
                onClick={() => handleChoose("home")}
                className={
                  isChoose === "home"
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
                  isChoose === "explore"
                    ? "flex flex-col items-center pl-1 py-2 bg-gray-200 hover:bg-gray-300 font-semibold text-xs"
                    : "flex flex-col items-center pl-1 py-2 hover:bg-gray-100 font-light text-xs"
                }
              >
                <ExploreButton className="w-5 h-6" />
                <span>Explore</span>
              </Link>

              {currentUser && currentUser.displayName ? (
                <>
                  <Link
                    to="/subscriptions"
                    onClick={() => handleChoose("subscriptions")}
                    className={
                      isChoose === "subscriptions"
                        ? "flex flex-col items-center pl-1 py-2 bg-gray-200 hover:bg-gray-300 font-semibold text-xs"
                        : "flex flex-col items-center pl-1 py-2 hover:bg-gray-100 font-light text-xs"
                    }
                  >
                    <SubscriptionsButton className="w-5 h-6" />
                    <span>Subs</span>
                  </Link>

                  <Link
                    to="/liked-videos"
                    onClick={() => handleChoose("liked-videos")}
                    className={
                      isChoose === "liked-videos"
                        ? "flex flex-col items-center pl-1 py-2 bg-gray-200 hover:bg-gray-300 font-semibold text-xs"
                        : "flex flex-col items-center pl-1 py-2 hover:bg-gray-100 font-light text-xs"
                    }
                  >
                    <LikeButton className="w-5 h-6" />
                    <span className="text-center">Liked videos</span>
                  </Link>
                </>
              ) : null}
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isChoose: state.searchData.isChoose,
    openSideBar: state.modalWindows.openSideBar,
  };
};

export default connect(mapStateToProps)(AsideMenu);
