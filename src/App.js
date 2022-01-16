import Header from "./components/Header";
import MainPage from "./components/MainPage";
import React, { Component } from "react";
import MainVideoPage from "./components/MainVideoPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import ExplorePage from "./components/ExplorePage";
import VideoContent from "./components/VideoContent";
import * as numeral from "numeral";
import * as moment from "moment";
import * as momentDurationFormatSetup from "moment-duration-format";
import SearchPage from "./components/SearchPage";

import MainPageTags from "./components/MainPageTags";

const { DateTime } = require("luxon");

const api_key = process.env.REACT_APP_API_KEY;
const videoData = "https://www.googleapis.com/youtube/v3/videos?";
const channelData = "https://www.googleapis.com/youtube/v3/channels?";
const searchData = "https://www.googleapis.com/youtube/v3/search?";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: true,
      visibleYoutubeApps: false,
      visibleSettings: false,
      video: [],
      isChoose: false,
      searchText: "",
      searchVideoData: [],
      fetching: false,
    };
  }

  handleStartSearch = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    this.setState({
      searchText: e.target.value,
    });
  };

  handleSearch = (e) => {
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
      })
      .catch((err) => console.log(err));
  };

  getSearchData = (value) =>
    fetch(
      searchData +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          maxResults: 15,
          q: value,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        data.items.forEach((item) => this.getChannelIcon(item));
        data.items.forEach((item) => this.getDataForSearchVideo(item));
        this.setState({
          searchVideoData: data.items,
          pageToken: data.nextPageToken,
        });
      })
      .catch((err) => console.log(err));

  getVideoId = (video) => {
    return video.id.videoId;
  };

  handleChoose = (id) => {
    this.setState({
      isChoose: id,
      searchText: "",
    });
  };

  handleSideBar = () => {
    this.setState({
      openSideBar: !this.state.openSideBar,
    });
  };

  handleModalYouTubeApps = () => {
    this.setState({
      visibleYoutubeApps: !this.state.visibleYoutubeApps,
    });
  };
  handleModalSettings = () => {
    this.setState({
      visibleSettings: !this.state.visibleSettings,
    });
  };

  getChannelIcon = (video) => {
    fetch(
      channelData +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          id: video.snippet.channelId,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        video.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
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
        data.items.forEach((item) => this.getChannelIcon(item));
        this.setState({
          video: data.items,
        });
      })
      .catch((err) => console.log(err));

    document.addEventListener("scroll", this.handleScroll);
  }

  // componentWillUnmount() {
  //   document.removeEventListener("scroll", this.handleScroll);
  // }

  handleScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log("scroll");
      this.setState({
        fetching: true,
      });
    }
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { searchVideoData, pageToken, searchText } = this.state;

    if (this.fetching) {
      fetch(
        searchData +
          new URLSearchParams({
            key: api_key,
            part: "snippet",
            maxResults: 2,
            q: searchText,
            pageToken: pageToken,
          })
      )
        .then((res) => res.json())
        .then((data) => {
          data.items.forEach((item) => this.getChannelIcon(item));
          data.items.forEach((item) => this.getDataForSearchVideo(item));
          this.setState({
            searchVideoData: [...searchVideoData, data.items],
            pageToken: data.nextPageToken,
          });
        })
        .finally(() => this.setState({ fetching: false }))
        .catch((err) => console.log(err));
    }
    return true;
  }

  viewCount = (str) => {
    let num;

    if (parseInt(str) > 1000) {
      num = numeral(str).format("0a").toUpperCase();
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

  render() {
    const { visibleYoutubeApps, visibleSettings, openSideBar } = this.state;
    return (
      <HashRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    handleSideBar={this.handleSideBar}
                    handleModalApps={this.handleModalYouTubeApps}
                    handleModalSettings={this.handleModalSettings}
                    visibleApps={visibleYoutubeApps}
                    visibleSettings={visibleSettings}
                    handleSearchClick={this.handleSearchClick}
                    state={this.state}
                    handleSearch={this.handleSearch}
                    handleStartSearch={this.handleStartSearch}
                    searchText={this.state.searchText}
                  />
                  <MainPage
                    state={this.state}
                    handleChoose={this.handleChoose}
                  />
                  <MainPageTags state={this.state} />
                  <VideoContent
                    state={this.state}
                    timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                    videoDuration={this.videoDuration}
                    viewCount={this.viewCount}
                  />
                </>
              }
            />
            <Route
              path="/:video"
              element={
                <MainVideoPage
                  handleSearchClick={this.handleSearchClick}
                  handleSearch={this.handleSearch}
                  openSideBar={openSideBar}
                  handleSideBar={this.handleSideBar}
                  handleModalApps={this.handleModalYouTubeApps}
                  handleModalSettings={this.handleModalSettings}
                  visibleApps={visibleYoutubeApps}
                  visibleSettings={visibleSettings}
                  handleChoose={this.handleChoose}
                  state={this.state}
                />
              }
            />
            <Route
              path="/explore"
              element={
                <ExplorePage
                  handleSearchClick={this.handleSearchClick}
                  handleSearch={this.handleSearch}
                  openSideBar={openSideBar}
                  handleSideBar={this.handleSideBar}
                  handleModalApps={this.handleModalYouTubeApps}
                  handleModalSettings={this.handleModalSettings}
                  visibleApps={visibleYoutubeApps}
                  visibleSettings={visibleSettings}
                  handleChoose={this.handleChoose}
                  state={this.state}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  videoDuration={this.videoDuration}
                  viewCount={this.viewCount}
                />
              }
            />
            <Route
              path="/search"
              element={
                <SearchPage
                  openSideBar={openSideBar}
                  handleSideBar={this.handleSideBar}
                  handleModalApps={this.handleModalYouTubeApps}
                  handleModalSettings={this.handleModalSettings}
                  visibleApps={visibleYoutubeApps}
                  visibleSettings={visibleSettings}
                  handleChoose={this.handleChoose}
                  state={this.state}
                  timeSinceLoadingVideo={this.timeSinceLoadingVideo}
                  videoDuration={this.videoDuration}
                  viewCount={this.viewCount}
                  handleSearchClick={this.handleSearchClick}
                  handleSearch={this.handleSearch}
                />
              }
            />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
