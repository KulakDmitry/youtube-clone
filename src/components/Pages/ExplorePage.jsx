import React, { Component } from "react";
import { ReactComponent as TrendIcon } from "../../icons/fire-icon-trend.svg";
import { ReactComponent as GamesIcon } from "../../icons/game-icon.svg";
import { ReactComponent as MusicIcon } from "../../icons/music.svg";
import { ReactComponent as SportIcon } from "../../icons/sportsicon.svg";
import { connect } from "react-redux";
import { getVideo } from "../../store/videoContentDataSlice";
import RenderVideoList from "../RenderVideoList";
import { getCommentsData } from "../../store/commentsDataSlice";
import { getVideoInfo } from "../../store/videoInfoSlice";
import PropTypes from "prop-types";

class ExplorePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getVideo());
  }

  handleGetVideoInfo = async (video) => {
    const { dispatch } = this.props;
    await dispatch(getCommentsData(video.id));
    await dispatch(getVideoInfo(video));
  };

  render() {
    const { openSideBar, videos } = this.props;

    return (
      <>
        <div
          className={`${
            openSideBar ? "md:ml-64  md:pl-20 " : "md:ml-16  md:pl-48"
          } bg-gray-50 pt-20 w-full`}
        >
          <div className="md:flex md:justify-between text-center md:pr-[35%] pb-10 text-lg font-medium">
            <div className="md:pr-24 pb-8 md:pl-6 pt-6 rounded bg-white hover:bg-gray-200 cursor-pointer">
              <TrendIcon className="m-auto w-8 h-8 mb-4" />
              <span>Tranding</span>
            </div>
            <div className=" md:pr-24 pb-8 md:pl-6 pt-6 rounded bg-white hover:bg-gray-200 cursor-pointer">
              <MusicIcon className="m-auto w-8 h-8 mb-4" />
              <span>Music</span>
            </div>
            <div className="md:pr-24 pb-8 md:pl-6 pt-6 rounded  bg-white hover:bg-gray-200 cursor-pointer">
              <GamesIcon className="m-auto w-8 h-8 mb-4" />
              <span>Gaming</span>
            </div>
            <div className="md:pr-24 pb-8 md:pl-6 pt-6 rounded bg-white hover:bg-gray-200 cursor-pointer">
              <SportIcon className="m-auto w-8 h-8 mb-4" />
              <span>Sports</span>
            </div>
          </div>
          <span className="font-semibold p-3 md:p-0">Trending videos</span>
          <div className="flex flex-col p-3 md:p-0">
            {videos.map((video, index) => (
              <RenderVideoList
                handleGetVideoInfo={this.handleGetVideoInfo}
                video={video}
                key={index}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videoContentData.video,
    openSideBar: state.modalWindows.openSideBar,
  };
};

export default connect(mapStateToProps)(ExplorePage);

ExplorePage.propTypes = {
  openSideBar: PropTypes.bool.isRequired,
  videos: PropTypes.array.isRequired,
};
