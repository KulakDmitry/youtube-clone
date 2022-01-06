import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import VideoContent from "./components/VideoContent";
import React, { Component } from "react";
import ModalYouTubeApps from "./components/ModalYouTubeApps";
import ModalSettings from "./components/ModalSettings";
import MainVideoPage from "./components/MainVideoPage";

const api_key = "AIzaSyDq2njpwxnbPNnIfM9j8ho_Pd8gR8NHGYw";
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
    };
  }
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
          maxResults: 25,
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

  render() {
    const { visibleYoutubeApps, visibleSettings, openSideBar } = this.state;
    return (
      <div className="App">
        <Header
          handleSideBar={this.handleSideBar}
          handleModalApps={this.handleModalYouTubeApps}
          handleModalSettings={this.handleModalSettings}
          visibleApps={visibleYoutubeApps}
          visibleSettings={visibleSettings}
        />
        {/*<MainVideoPage*/}
        {/*  openSideBar={openSideBar}*/}
        {/*  handleSideBar={this.handleSideBar}*/}
        {/*  handleModalApps={this.handleModalYouTubeApps}*/}
        {/*  handleModalSettings={this.handleModalSettings}*/}
        {/*  visibleApps={visibleYoutubeApps}*/}
        {/*  visibleSettings={visibleSettings}*/}
        {/*/>*/}
        <MainPage state={this.state} />
      </div>
    );
  }
}

export default App;
