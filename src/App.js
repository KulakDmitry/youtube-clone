import Header from "./components/Header";
import MainPage from "./components/MainPage";
import React, { Component } from "react";
import MainVideoPage from "./components/MainVideoPage";
import { Route, Routes, HashRouter } from "react-router-dom";
import ExplorePage from "./components/ExplorePage";
import VideoContent from "./components/VideoContent";
import * as numeral from "numeral";
import * as moment from "moment";
import * as momentDurationFormatSetup from "moment-duration-format";
const { DateTime } = require("luxon");

const api_key = process.env.REACT_APP_API_KEY;
const videoData = "https://www.googleapis.com/youtube/v3/videos?";
const channelData = "https://www.googleapis.com/youtube/v3/channels?";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: true,
      visibleYoutubeApps: false,
      visibleSettings: false,
      video: [],
      isChoose: false,
    };
  }

  handleChoose = (id) => {
    this.setState({
      isChoose: id,
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

  componentDidMount() {
    fetch(
      videoData +
        new URLSearchParams({
          key: api_key,
          part: "snippet, contentDetails, statistics",
          chart: "mostPopular",
          maxResults: 3,
          regionCode: "US",
        })
    )
      .then((res) => res.json())
      .then((data) => {
        data.items.forEach((item) => getChannelIcon(item));
        this.setState({
          video: data.items,
        });
      })

      .catch((err) => console.log(err));

    const getChannelIcon = (video) => {
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
        });
    };
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
                  />
                  <MainPage
                    state={this.state}
                    handleChoose={this.handleChoose}
                  />
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
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
