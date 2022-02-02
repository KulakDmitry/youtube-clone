import Header from "./components/Header";
import React, { Component } from "react";
import MainVideoPage from "./components/MainVideoPage";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import ExplorePage from "./components/ExplorePage";
import * as numeral from "numeral";
import * as moment from "moment";
import * as momentDurationFormatSetup from "moment-duration-format";
import SearchPage from "./components/SearchPage";
import ModalSignUp from "./components/ModalMenu/ModalSignUp/ModalSignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ModalUserMenu from "./components/ModalMenu/ModalUserMenu/ModalUserMenu";
import MainPage from "./components/MainPage";
import SubscriptionsPage from "./components/SubscriptionsPage";
import LikedVideosPage from "./components/LikedVideosPage";
import { handleSearchText, isChoose } from "./components/store/searchVideoData";
import { connect } from "react-redux";
import { getCommentsData } from "./components/store/videoCommentsData";
import {
  getVideoInfo,
  getVideoSearchInfo,
} from "./components/store/videoInfoData";
import {
  handleModalSettings,
  handleModalSignUp,
  handleModalYouTubeApps,
  handleSideBar,
  handleUserModalMenu,
} from "./components/store/handlers";

const { DateTime } = require("luxon");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isLoading: false,
    };
  }

  handleSearchInput = (e) => {
    const { dispatch } = this.props;
    dispatch(handleSearchText(e.target.value));
  };

  handleChoose = (id) => {
    const { dispatch } = this.props;
    dispatch(handleSearchText(""));
    dispatch(isChoose(id));
  };

  handleSideBar = () => {
    const { dispatch } = this.props;
    dispatch(handleSideBar());
  };

  handleModalYouTubeApps = () => {
    const { dispatch } = this.props;
    dispatch(handleModalYouTubeApps());
  };
  handleModalSettings = () => {
    const { dispatch } = this.props;
    dispatch(handleModalSettings());
  };

  handleModalSignUp = () => {
    const { dispatch } = this.props;
    dispatch(handleModalSignUp());
  };

  handleUserModalMenu = () => {
    const { dispatch } = this.props;
    dispatch(handleUserModalMenu());
  };

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      this.setState({
        currentUser: user,
      });
    });
  }

  convertCount = (str) => {
    let num;

    if (parseInt(str) > 1000) {
      num = numeral(str).format("0a").toUpperCase();
    } else {
      num = parseInt(str);
    }

    if (parseInt(str) > 1000000) {
      num = numeral(str).format("0.0a").toUpperCase();
    }

    return num;
  };

  videoDuration = (duration) =>
    moment.duration(duration).format("h:mm:ss").padStart(4, "0:0");

  timeSinceLoadingVideo = (date) => {
    const units = ["year", "month", "day", "hour", "minute", "second"];
    let dateTime = DateTime.fromISO(date);
    const diff = dateTime.diffNow().shiftTo(...units);
    const unit = units.find((unit) => diff.get(unit) !== 0) || "second";

    const relativeFormatter = new Intl.RelativeTimeFormat("en", {
      numeric: "auto",
    });
    return relativeFormatter.format(Math.trunc(diff.as(unit)), unit);
  };

  handleGetVideoSearchInfo = (video) => {
    const { dispatch } = this.props;
    dispatch(getCommentsData(video.id.videoId));
    dispatch(getVideoSearchInfo(video));
  };

  handleGetVideoInfo = async (video) => {
    const { dispatch } = this.props;
    dispatch(getCommentsData(video.id));
    await dispatch(getVideoInfo(video));
  };

  render() {
    const { currentUser } = this.state;
    const { user, visibleModalSingUp, visibleUserModalMenu } = this.props;

    return (
      <HashRouter>
        <div className="App">
          {visibleModalSingUp ? (
            <ModalSignUp handleModalSignUp={this.handleModalSignUp} />
          ) : null}
          {visibleUserModalMenu ? (
            <ModalUserMenu
              handleUserModalMenu={this.handleUserModalMenu}
              currentUser={currentUser}
              user={user}
            />
          ) : null}
          <Header
            handleSideBar={this.handleSideBar}
            handleModalApps={this.handleModalYouTubeApps}
            handleModalSettings={this.handleModalSettings}
            handleSearch={this.handleSearchInput}
            handleModalSignUp={this.handleModalSignUp}
            currentUser={currentUser}
            handleUserModalMenu={this.handleUserModalMenu}
          />
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  handleChoose={this.handleChoose}
                  videoDuration={this.videoDuration}
                  convertCount={this.convertCount}
                  handleGetVideoInfo={this.handleGetVideoInfo}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  currentUser={currentUser}
                />
              }
            />
            <Route
              path="/video/:id"
              element={
                <MainVideoPage
                  handleChoose={this.handleChoose}
                  handleGetVideoInfo={this.handleGetVideoInfo}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  videoDuration={this.videoDuration}
                  convertCount={this.convertCount}
                  currentUser={currentUser}
                />
              }
            />
            <Route
              path="/explore"
              element={
                <ExplorePage
                  handleChoose={this.handleChoose}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  videoDuration={this.videoDuration}
                  viewCount={this.convertCount}
                  handleGetVideoInfo={this.handleGetVideoInfo}
                  currentUser={currentUser}
                />
              }
            />
            <Route
              path="/subscriptions"
              element={
                <SubscriptionsPage
                  handleChoose={this.handleChoose}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  videoDuration={this.videoDuration}
                  viewCount={this.convertCount}
                  handleGetVideoInfo={this.handleGetVideoInfo}
                  currentUser={currentUser}
                />
              }
            />
            <Route
              path="/liked-videos"
              element={
                <LikedVideosPage
                  handleChoose={this.handleChoose}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  videoDuration={this.videoDuration}
                  viewCount={this.convertCount}
                  handleGetVideoInfo={this.handleGetVideoInfo}
                  currentUser={currentUser}
                />
              }
            />
            <Route
              path="/search"
              element={
                <SearchPage
                  handleChoose={this.handleChoose}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  videoDuration={this.videoDuration}
                  viewCount={this.convertCount}
                  handleGetVideoSearchInfo={this.handleGetVideoSearchInfo}
                  currentUser={currentUser}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchVideoData: state.searchData.searchVideoData,
    videoComments: state.commentsData.videoComments,
    user: state.user.user,
    searchText: state.searchData.searchText,
    videoInfo: state.videoInfo.videoInfo,
    visibleModalSingUp: state.modalWindows.visibleModalSingUp,
    visibleUserModalMenu: state.modalWindows.visibleUserModalMenu,
  };
};

export default connect(mapStateToProps)(App);
