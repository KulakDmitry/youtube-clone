import React, { Component } from "react";
import AsideMenu from "./AsideMenu";
import { connect } from "react-redux";
import { getChannel } from "./store/subsChannelData";
import { getUser } from "./store/userData";

class SubscriptionsPage extends Component {
  componentDidMount() {
    const { dispatch, user, currentUser } = this.props;

    dispatch(getUser(currentUser));

    dispatch(getChannel(user && user.followers));
  }
  render() {
    const {
      openSideBar,
      handleChoose,
      viewCount,
      currentUser,
      user,
      channelSubs,
    } = this.props;
    return (
      <div>
        <AsideMenu handleChoose={handleChoose} currentUser={currentUser} />
        <div
          className={`${
            openSideBar
              ? "md:ml-64  md:pl-20 md:grid md:grid-cols-4"
              : "md:pl-48 md:grid md:grid-cols-5"
          } bg-gray-50 pt-20 md:gap-10 `}
        >
          {user && channelSubs && user.followers.length ? (
            channelSubs.map((i) => (
              <a
                key={i.id}
                href={`https://www.youtube.com/channel/${i.id}`}
                className="m-2 p-4 flex flex-col items-center"
              >
                <img
                  className="rounded-full"
                  src={`${i.snippet.thumbnails.default.url}`}
                  alt=""
                />
                <span>{i.snippet.title}</span>
                <span>{viewCount(i.statistics.subscriberCount)}</span>
              </a>
            ))
          ) : (
            <div className="text-center h-screen p-10">no subscriptions</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    channelSubs: state.channelSubsData.channelSubs,
    openSideBar: state.modalWindows.openSideBar,
  };
};

export default connect(mapStateToProps)(SubscriptionsPage);
