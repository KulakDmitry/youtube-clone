import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import VideoContent from "./components/VideoContent";
import React, { Component } from "react";
import ModalYouTubeApps from "./components/ModalYouTubeApps";
import ModalSettings from "./components/ModalSettings";

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
    return (
      <div className="App">
        <Header
          handleSideBar={this.handleSideBar}
          handleModal={this.handleModalYouTubeApps}
          handleSettings={this.handleModalSettings}
        />
        <ModalYouTubeApps visible={this.state.visibleYoutubeApps} />
        <ModalSettings visible={this.state.visibleSettings} />
        <MainPage state={this.state} />
        <VideoContent state={this.state} />
      </div>
    );
  }
}

export default App;
