import React, { Component } from "react";
import { connect } from "react-redux";
import { getChannel } from "../../store/channelSubsSlice";
import { convertCount } from "../../utils/convertCount";
import PropTypes from "prop-types";

class SubscriptionsPage extends Component {
  componentDidMount() {
    const { dispatch, user } = this.props;

    dispatch(getChannel(user && user.followers));
  }

  render() {
    const { openSideBar, user, channelSubs } = this.props;
    return (
      <div>
        <div
          className={`${
            openSideBar
              ? "md:ml-64  md:pl-20 md:grid md:grid-cols-4"
              : "md:pl-48 md:grid md:grid-cols-5"
          } bg-gray-50 pt-20 md:gap-10 `}
        >
          {user && channelSubs && user.followers.length ? (
            channelSubs.map((channelSub) => (
              <a
                key={channelSub.id}
                href={`https://www.youtube.com/channel/${channelSub.id}`}
                className="m-2 p-4 flex flex-col items-center"
              >
                <img
                  className="rounded-full"
                  src={`${channelSub.snippet.thumbnails.default.url}`}
                  alt=""
                />
                <span>{channelSub.snippet.title}</span>
                <span>
                  {convertCount(channelSub.statistics.subscriberCount)}
                  subscribers
                </span>
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

SubscriptionsPage.defaultProps = {
  channelSubs: [],
  user: null,
};

SubscriptionsPage.propTypes = {
  openSideBar: PropTypes.bool.isRequired,
  user: PropTypes.object,
  channelSubs: PropTypes.array,
};
