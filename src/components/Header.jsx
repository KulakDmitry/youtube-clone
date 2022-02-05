import React, { Component } from "react";

import { ReactComponent as BurgerMenuIcon } from "../icons/burger-menu-icon.svg";
import { ReactComponent as YoutubeLogo } from "../icons/YouTubeLogo.svg";
import { ReactComponent as SearchVoiceLogo } from "../icons/voice-search.svg";
import { ReactComponent as AppsLogo } from "../icons/apps.svg";
import { ReactComponent as SettingsLogo } from "../icons/three-dots-setings.svg";
import { ReactComponent as ProfileLogo } from "../icons/prolifeIcon.svg";
import { ReactComponent as SearchButtonLogo } from "../icons/search-button.svg";
import ModalYouTubeApps from "./Menu/MenuYoutubeApps/MenuYouTubeApps";
import MenuSettings from "./Menu/MenuSettings/MenuSettings";
import { Link } from "react-router-dom";
import defaultAvatar from "../icons/profileDefaultAvatar.jpg";
import { withRouter } from "../withRouter";
import { connect } from "react-redux";
import {
  clearData,
  getSearchData,
  handleSearchText,
} from "../store/searchDataSlice";
import { loadingFalse, loadingTrue } from "../store/loadingSlice";
import {
  handleModalSettings,
  handleModalSignUp,
  handleModalYouTubeApps,
  handleSideBar,
  handleUserModalMenu,
} from "../store/handlersSlice";
import { getUser } from "../store/userSlice";

class Header extends Component {
  componentDidMount() {
    const { currentUser, dispatch } = this.props;
    dispatch(getUser(currentUser));
  }

  handleUserModalMenu = () => {
    const { dispatch } = this.props;
    dispatch(handleUserModalMenu());
  };

  handleModalYouTubeApps = () => {
    const { dispatch } = this.props;
    dispatch(handleModalYouTubeApps());
  };

  handleModalSettings = () => {
    const { dispatch } = this.props;
    dispatch(handleModalSettings());
  };

  handleSideBar = () => {
    const { dispatch } = this.props;
    dispatch(handleSideBar());
  };

  handleModalSignUp = () => {
    const { dispatch } = this.props;
    dispatch(handleModalSignUp());
  };

  handleSearchInput = (e) => {
    const { dispatch } = this.props;
    dispatch(handleSearchText(e.target.value));
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.navigate("/search");
  };

  handleStartSearch = async (e) => {
    const { dispatch, searchText } = this.props;

    if (e.key !== "Enter") {
      return;
    }

    await dispatch(clearData());
    await dispatch(loadingTrue());
    await dispatch(getSearchData(searchText));
    await dispatch(loadingFalse());
  };

  handleSearchClick = async () => {
    const { dispatch, searchText } = this.props;

    await dispatch(clearData());
    await dispatch(loadingTrue());
    await dispatch(getSearchData(searchText));
    await dispatch(loadingFalse());
  };

  render() {
    const { searchText, visibleApps, visibleSettings, currentUser, user } =
      this.props;
    return (
      <>
        <div className="flex justify-between fixed w-full bg-white z-20">
          <div className="flex items-center md:w-1/4">
            <BurgerMenuIcon
              onClick={this.handleSideBar}
              className="w-5 ml-2 cursor-pointer md:w-6 md:ml-6 "
            />
            <Link to="/">
              <YoutubeLogo className="w-20 h-14 cursor-pointer md:w-32 md:ml-2" />
            </Link>
          </div>
          <form
            className="flex items-center w-full  md:w-1/2"
            onSubmit={this.handleSearch}
          >
            <input
              placeholder="Search"
              className="border p-2 pl-4 w-full focus:outline-none focus:border-blue-700 shadow-inner"
              type="text"
              value={searchText}
              onChange={this.handleSearchInput}
              onKeyDown={this.handleStartSearch}
            />
            <button
              onClick={this.handleSearchClick}
              className="hidden md:block md:border md:p-2 md:px-6 md:bg-gray-100 md:hover:bg-gray-200"
            >
              <SearchButtonLogo className="w-4 md:w-6" />
            </button>
            <SearchVoiceLogo className="hidden md:block md:ml-2 md:w-8 md:cursor-pointer" />
          </form>
          <div className="flex justify-end items-center  md:w-1/4 md:mr-8">
            <AppsLogo
              className="hidden md:block md:ml-4 md:w-6 md:cursor-pointer"
              onClick={this.handleModalYouTubeApps}
            />
            <SettingsLogo
              className="hidden md:block md:ml-4 md:w-6 md:cursor-pointer"
              onClick={this.handleModalSettings}
            />

            {currentUser ? (
              <button
                onClick={this.handleUserModalMenu}
                className="mx-1 md:ml-10 w-8 h-8"
              >
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
                onClick={this.handleModalSignUp}
                className=" md:ml-4 md:border-2 md:border-blue-600 md:p-2 md:flex md:items-center md:cursor-pointer"
              >
                <ProfileLogo className="w-6 cursor-pointer mr-2" />
                <p className="hidden md:block md:text-blue-600">SIGN IN</p>
              </button>
            )}
          </div>
        </div>
        <ModalYouTubeApps visibleApps={visibleApps} />
        <MenuSettings visibleSettings={visibleSettings} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    searchText: state.searchData.searchText,
    isLoading: state.loading.isLoading,
    visibleSettings: state.modalWindows.visibleSettings,
    visibleModalSingUp: state.modalWindows.visibleModalSingUp,
    visibleUserModalMenu: state.modalWindows.visibleUserModalMenu,
  };
};

export default connect(mapStateToProps)(withRouter(Header));
