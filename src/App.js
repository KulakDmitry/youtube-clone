import Header from "./components/Header";
import React, { Component } from "react";
import MainVideoPage from "./components/MainVideoPage";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import ExplorePage from "./components/ExplorePage";
import * as numeral from "numeral";
import * as moment from "moment";
import * as momentDurationFormatSetup from "moment-duration-format";
import SearchPage from "./components/SearchPage";
import ModalSignUp from "./components/ModalMenu/ModalSignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ModalUserMenu from "./components/ModalMenu/ModalUserMenu";
import MainPage from "./components/MainPage";
import SubscriptionsPage from "./components/SubscriptionsPage";
import LikedVideosPage from "./components/LikedVideosPage";
import defaultAvatar from "./icons/profileDefaultAvatar.jpg";

const { DateTime } = require("luxon");
const api_key = process.env.REACT_APP_API_KEY;
const videoData = "https://www.googleapis.com/youtube/v3/videos?";
const channelData = "https://www.googleapis.com/youtube/v3/channels?";
const searchData = "https://www.googleapis.com/youtube/v3/search?";
const commentsData = "https://www.googleapis.com/youtube/v3/commentThreads?";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      user: null,
      openSideBar: true,
      visibleModalSingUp: false,
      visibleYoutubeApps: false,
      visibleSettings: false,
      visibleUserModalMenu: false,
      video: [],
      isChoose: false,
      searchText: "",
      searchVideoData: [],
      fetching: false,
      pageToken: "",
      videoInfo: {},
      videoComments: [],
    };
  }

  handleStartSearch = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    const { searchText } = this.state;
    this.setState({
      searchVideoData: [],
    });
    this.getSearchData(searchText).then();
  };

  handleSearchInput = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleSearchClick = () => {
    const { searchText } = this.state;
    this.setState({
      searchVideoData: [],
    });
    this.getSearchData(searchText).then();
  };

  getDataForSearchVideo = (video) => {
    fetch(
      videoData +
        new URLSearchParams({
          key: api_key,
          part: "contentDetails, statistics",
          id: video.id.videoId,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        video.duration = data.items[0].contentDetails.duration;
        video.views = data.items[0].statistics.viewCount;
        video.likeCount = data.items[0].statistics.likeCount;
        video.commentCount = data.items[0].statistics.commentCount;
      })
      .catch((err) => console.log(err));
  };

  getCommentsData = (id) => {
    fetch(
      commentsData +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          videoId: id,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          videoComments: data.items,
        });
      })
      .catch((err) => console.log(err));
  };

  getSearchData = (value) =>
    fetch(
      searchData +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          maxResults: 5,
          q: value,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        data.items.forEach((item) => this.getChannelData(item));
        data.items.forEach((item) => this.getDataForSearchVideo(item));
        this.setState({
          searchVideoData: data.items,
          pageToken: data.nextPageToken,
        });
      })
      .catch((err) => console.log(err));

  handleChoose = (id) => {
    this.setState({
      isChoose: id,
      searchText: "",
    });
  };

  handleSideBar = () => {
    const { openSideBar } = this.state;
    this.setState({
      openSideBar: !openSideBar,
    });
  };

  handleModalYouTubeApps = () => {
    const { visibleYoutubeApps } = this.state;
    this.setState({
      visibleYoutubeApps: !visibleYoutubeApps,
    });
  };
  handleModalSettings = () => {
    const { visibleSettings } = this.state;
    this.setState({
      visibleSettings: !visibleSettings,
    });
  };

  getChannelData = (video) => {
    fetch(
      channelData +
        new URLSearchParams({
          key: api_key,
          part: "snippet, statistics",
          id: video.snippet.channelId,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        video.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        video.subscribersCount = data.items[0].statistics.subscriberCount;
        video.channelUrl = data.items[0].id;
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      this.setState({
        currentUser: user,
      });
    });

    fetch(
      videoData +
        new URLSearchParams({
          key: api_key,
          part: "snippet, contentDetails, statistics",
          chart: "mostPopular",
          maxResults: 2,
          regionCode: "US",
        })
    )
      .then((res) => res.json())
      .then((data) => {
        data.items.forEach((item) => this.getChannelData(item));
        this.setState({
          video: data.items,
        });
      })
      .catch((err) => console.log(err));
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

  handleModalSignUp = () => {
    const { visibleModalSingUp } = this.state;
    this.setState({
      visibleModalSingUp: !visibleModalSingUp,
    });
  };

  handleUserModalMenu = () => {
    const { visibleUserModalMenu } = this.state;
    this.setState({
      visibleUserModalMenu: !visibleUserModalMenu,
    });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  handleGetVideoSearchInfo = (video) => {
    this.getCommentsData(video.id.videoId);
    this.setState({
      videoInfo: {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        views: this.convertCount(video.views),
        channelTitle: video.snippet.channelTitle,
        likeCount: this.convertCount(video.likeCount),
        commentCount: this.convertCount(video.commentCount),
        subscribersCount: this.convertCount(video.subscribersCount),
        publishedAt: DateTime.fromISO(video.snippet.publishedAt).toLocaleString(
          DateTime.DATE_MED
        ),
        channelThumbnail: video.channelThumbnail,
        channelUrl: video.channelUrl,
      },
    });
  };

  handleGetVideoInfo = (video) => {
    this.getCommentsData(video.id);
    this.setState({
      videoInfo: {
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        views: this.convertCount(video.statistics.viewCount),
        channelTitle: video.snippet.channelTitle,
        likeCount: this.convertCount(video.statistics.likeCount),
        commentCount: this.convertCount(video.statistics.commentCount),
        subscribersCount: this.convertCount(video.subscribersCount),
        publishedAt: DateTime.fromISO(video.snippet.publishedAt).toLocaleString(
          DateTime.DATE_MED
        ),
        channelThumbnail: video.channelThumbnail,
        channelUrl: video.channelUrl,
      },
    });
  };

  handleSortSearch = (e) => {
    const { searchText } = this.state;
    fetch(
      searchData +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          maxResults: 5,
          q: searchText,
          order: e.target.value,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        data.items.forEach((item) => this.getChannelData(item));
        data.items.forEach((item) => this.getDataForSearchVideo(item));
        this.setState({
          searchVideoData: data.items,
          pageToken: data.nextPageToken,
        });
      })
      .catch((err) => console.log(err));
  };

  handleAddComment = (text) => {
    const { videoComments, currentUser, user, videoInfo } = this.state;
    this.setState({
      videoComments: [
        {
          videoComment: {
            authorProfileImageUrl:
              user && user.profileSrc ? user.profileSrc : defaultAvatar,
            authorDisplayName: currentUser.displayName,
            publishedAt: moment().toISOString(),
            textOriginal: text,
            likeCount: 0,
          },
        },
        ...videoComments,
      ],
      videoInfo: { ...videoInfo, commentCount: videoInfo.commentCount + 1 },
    });
  };

  render() {
    const {
      visibleYoutubeApps,
      visibleSettings,
      openSideBar,
      visibleModalSingUp,
      currentUser,
      visibleUserModalMenu,
      user,
    } = this.state;

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
              setUser={this.setUser}
              user={user}
            />
          ) : null}
          <Header
            handleSideBar={this.handleSideBar}
            handleModalApps={this.handleModalYouTubeApps}
            handleModalSettings={this.handleModalSettings}
            visibleApps={visibleYoutubeApps}
            visibleSettings={visibleSettings}
            handleSearchClick={this.handleSearchClick}
            state={this.state}
            handleSearch={this.handleSearchInput}
            handleStartSearch={this.handleStartSearch}
            searchText={this.state.searchText}
            visibleModalSingUp={visibleModalSingUp}
            handleModalSignUp={this.handleModalSignUp}
            currentUser={currentUser}
            user={user}
            setUser={this.setUser}
            handleUserModalMenu={this.handleUserModalMenu}
            visibleUserModalMenu={visibleUserModalMenu}
          />
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  state={this.state}
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
                  openSideBar={openSideBar}
                  handleChoose={this.handleChoose}
                  state={this.state}
                  handleGetVideoInfo={this.handleGetVideoInfo}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  videoDuration={this.videoDuration}
                  convertCount={this.convertCount}
                  currentUser={currentUser}
                  handleAddComment={this.handleAddComment}
                />
              }
            />
            <Route
              path="/explore"
              element={
                <ExplorePage
                  handleChoose={this.handleChoose}
                  state={this.state}
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
                  state={this.state}
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
                  state={this.state}
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
                  state={this.state}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  videoDuration={this.videoDuration}
                  viewCount={this.convertCount}
                  handleGetVideoSearchInfo={this.handleGetVideoSearchInfo}
                  handleSortSearch={this.handleSortSearch}
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

export default App;
