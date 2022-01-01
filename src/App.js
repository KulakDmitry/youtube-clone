import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import VideoContent from "./components/VideoContent";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: true,
    };
  }
  handleSideBar = () => {
    this.setState({
      openSideBar: !this.state.openSideBar,
    });
  };

  render() {
    return (
      <div className="App">
        <Header handle={this.handleSideBar} state={this.state} />
        <MainPage state={this.state} />
        <VideoContent state={this.state} />
      </div>
    );
  }
}

export default App;
