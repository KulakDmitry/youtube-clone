import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import VideoContent from "./components/VideoContent";
import React, { Component } from "react";
import ModalYouTubeApps from "./components/ModalYouTubeApps";
import ModalSettings from "./components/ModalSettings";
import MainVideoPage from "./components/MainVideoPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: true,
      visibleYoutubeApps: false,
      visibleSettings: false,
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

  render() {
    const { visibleYoutubeApps, visibleSettings } = this.state;
    return (
      <div className="App">
        {/*<Header*/}
        {/*  handleSideBar={this.handleSideBar}*/}
        {/*  handleModalApps={this.handleModalYouTubeApps}*/}
        {/*  handleModalSettings={this.handleModalSettings}*/}
        {/*  visibleApps={visibleYoutubeApps}*/}
        {/*  visibleSettings={visibleSettings}*/}
        {/*/>*/}
        <MainVideoPage
          handleSideBar={this.handleSideBar}
          handleModalApps={this.handleModalYouTubeApps}
          handleModalSettings={this.handleModalSettings}
          visibleApps={visibleYoutubeApps}
          visibleSettings={visibleSettings}
        />
        {/*<MainPage state={this.state} />*/}
      </div>
    );
  }
}

export default App;
