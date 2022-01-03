import React, { Component } from "react";

import { ReactComponent as BurgerMenuIcon } from "../icons/burger-menu-icon.svg";
import { ReactComponent as YoutubeLogo } from "../icons/YouTubeLogo.svg";
import { ReactComponent as SearchVoiceLogo } from "../icons/voice-search.svg";
import { ReactComponent as AppsLogo } from "../icons/apps.svg";
import { ReactComponent as SettingsLogo } from "../icons/three-dots-setings.svg";
import { ReactComponent as ProfileLogo } from "../icons/profile-icon.svg";
import { ReactComponent as SearchButtonLogo } from "../icons/search-button.svg";
import ModalYouTubeApps from "./ModalYouTubeApps";
import ModalSettings from "./ModalSettings";

class Header extends Component {
  render() {
    const {
      handleSideBar,
      handleModalApps,
      handleModalSettings,
      visibleApps,
      visibleSettings,
    } = this.props;
    return (
      <>
        <div className="flex fixed w-full bg-white z-20">
          <div className="flex items-center w-1/4">
            <BurgerMenuIcon
              onClick={handleSideBar}
              className="w-6 ml-6 mt-1 cursor-pointer"
            />
            <YoutubeLogo className="w-32 h-14 ml-2 cursor-pointer" />
          </div>
          <div className="flex items-center w-1/2">
            <input
              placeholder="Search"
              className="border p-2 pl-4 w-full focus:outline-none focus:border-blue-700 shadow-inner"
              type="text"
            />
            <button className="border p-2 px-6 bg-gray-100 hover:bg-gray-200">
              <SearchButtonLogo className="w-6" />
            </button>
            <SearchVoiceLogo className="ml-2 w-8 cursor-pointer" />
          </div>
          <div className="flex justify-end mr-8 items-center w-1/4">
            <AppsLogo
              className="ml-4 w-6 cursor-pointer"
              onClick={handleModalApps}
            />
            <SettingsLogo
              className="ml-4 w-6 cursor-pointer"
              onClick={handleModalSettings}
            />
            <div className="ml-4 border border-blue-600 p-2 flex items-center cursor-pointer">
              <ProfileLogo className="w-6 cursor-pointer mr-2 " />
              <p className="text-blue-600">SIGN IN</p>
            </div>
          </div>
        </div>
        <ModalYouTubeApps visibleApps={visibleApps} />
        <ModalSettings visibleSettings={visibleSettings} />
      </>
    );
  }
}

export default Header;
