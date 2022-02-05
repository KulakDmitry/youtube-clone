import React, { Component } from "react";
import MainPageTags from "./MainPageTags";
import VideoContent from "./VideoContent";

class MainPage extends Component {
  render() {
    return (
      <>
        <MainPageTags />
        <VideoContent />
      </>
    );
  }
}

export default MainPage;
