import Header from "./Header";
import React, { Component } from "react";
import MainVideoPage from "./Pages/MainVideoPage";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import ExplorePage from "./Pages/ExplorePage";
import SearchPage from "./Pages/SearchPage";
import ModalSignUp from "./ModalSignUp/ModalSignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import ModalUserMenu from "./Menu/UserMenu/UserMenu";
import MainPage from "./Pages/MainPage/MainPage";
import SubscriptionsPage from "./Pages/SubscriptionsPage";
import LikedVideosPage from "./Pages/LikedVideosPage";
import { connect } from "react-redux";
import AsideMenu from "./Menu/AsideMenu";
import { getUser } from "../store/userSlice";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { currentUser } = this.state;
    onAuthStateChanged(auth, (user) => {
      this.setState({
        currentUser: user,
      });
    });

    dispatch(getUser(currentUser));
  }

  render() {
    const { currentUser } = this.state;
    const { user, visibleModalSingUp, visibleUserModalMenu } = this.props;

    return (
      <HashRouter>
        <div className="App">
          {visibleModalSingUp ? <ModalSignUp /> : null}
          {visibleUserModalMenu ? (
            <ModalUserMenu currentUser={currentUser} user={user} />
          ) : null}
          <Header currentUser={currentUser} />
          <AsideMenu currentUser={currentUser} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/video/:id"
              element={<MainVideoPage currentUser={currentUser} />}
            />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/liked-videos" element={<LikedVideosPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    videoComments: state.commentsData.videoComments,
    user: state.user.user,
    searchText: state.searchData.searchText,
    videoInfo: state.videoInfo.videoInfo,
    visibleModalSingUp: state.modalWindows.visibleModalSingUp,
    visibleUserModalMenu: state.modalWindows.visibleUserModalMenu,
  };
};

export default connect(mapStateToProps)(App);

App.defaultProps = {
  user: null,
};

App.propTypes = {
  user: PropTypes.object,
  visibleModalSingUp: PropTypes.bool.isRequired,
  visibleUserModalMenu: PropTypes.bool.isRequired,
};
