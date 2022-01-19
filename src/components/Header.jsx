import React, { Component } from "react";

import { ReactComponent as BurgerMenuIcon } from "../icons/burger-menu-icon.svg";
import { ReactComponent as YoutubeLogo } from "../icons/YouTubeLogo.svg";
import { ReactComponent as SearchVoiceLogo } from "../icons/voice-search.svg";
import { ReactComponent as AppsLogo } from "../icons/apps.svg";
import { ReactComponent as SettingsLogo } from "../icons/three-dots-setings.svg";
import { ReactComponent as ProfileLogo } from "../icons/prolifeIcon.svg";
import { ReactComponent as SearchButtonLogo } from "../icons/search-button.svg";
import ModalYouTubeApps from "./ModalButtons/ModalYouTubeApps";
import ModalSettings from "./ModalButtons/ModalSettings";
import { Link } from "react-router-dom";
import defaultAvatar from "../icons/profileDefaultAvatar.jpg";

class Header extends Component {
  render() {
    const {
      searchText,
      handleSearchClick,
      handleStartSearch,
      handleSideBar,
      handleModalApps,
      handleModalSettings,
      visibleApps,
      visibleSettings,
      handleSearch,
      handleModalSignUp,
      currentUser,
      handleUserModalMenu,
      user,
    } = this.props;
    return (
      <>
        <div className="flex justify-between fixed w-full bg-white z-20">
          <div className="flex items-center md:w-1/4">
            <BurgerMenuIcon
              onClick={handleSideBar}
              className="hidden md:block md:w-6 md:ml-6 md:cursor-pointer"
            />
            <Link to="/">
              <YoutubeLogo className="w-20 h-14 cursor-pointer md:w-32 md:ml-2" />
            </Link>
          </div>
          <div className="flex items-center w-full  md:w-1/2">
            <input
              placeholder="Search"
              className="border p-2 pl-4 w-full focus:outline-none focus:border-blue-700 shadow-inner"
              type="text"
              value={searchText}
              onChange={handleSearch}
              onKeyDown={handleStartSearch}
            />
            <Link
              to="/search"
              onClick={handleSearchClick}
              className="hidden md:block md:border md:p-2 md:px-6 md:bg-gray-100 md:hover:bg-gray-200"
            >
              <SearchButtonLogo className="w-4 md:w-6" />
            </Link>
            <SearchVoiceLogo className="hidden md:block md:ml-2 md:w-8 md:cursor-pointer" />
          </div>
          <div className="flex justify-end items-center  md:w-1/4 md:mr-8">
            <AppsLogo
              className="hidden md:block md:ml-4 md:w-6 md:cursor-pointer"
              onClick={handleModalApps}
            />
            <SettingsLogo
              className="hidden md:block md:ml-4 md:w-6 md:cursor-pointer"
              onClick={handleModalSettings}
            />

            {currentUser ? (
              <button onClick={handleUserModalMenu} className="mx-1 md:ml-10">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src={
                    user && user.profileSrc ? user.profileSrc : defaultAvatar
                  }
                  alt=""
                />
              </button>
            ) : (
              <button
                onClick={handleModalSignUp}
                className=" md:ml-4 md:border-2 md:border-blue-600 md:p-2 md:flex md:items-center md:cursor-pointer"
              >
                <ProfileLogo className="w-6 cursor-pointer mr-2" />
                <p className="hidden md:block md:text-blue-600">SIGN IN</p>
              </button>
            )}
          </div>
        </div>
        <ModalYouTubeApps visibleApps={visibleApps} />
        <ModalSettings visibleSettings={visibleSettings} />
      </>
    );
  }
}

export default Header;
