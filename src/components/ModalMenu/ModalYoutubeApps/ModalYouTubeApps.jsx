import React, { Component } from "react";
import { ReactComponent as YoutubeTVIcon } from "../../../icons/youtube-TV.svg";
import { ReactComponent as YoutubeMusicIcon } from "../../../icons/youtube-music.svg";
import { ReactComponent as YoutubeKidsIcon } from "../../../icons/youtube-kids.svg";
import { ReactComponent as YoutubeArtistsIcon } from "../../../icons/youtube-artists.svg";
import { connect } from "react-redux";

class ModalYouTubeApps extends Component {
  render() {
    const { visibleYoutubeApps } = this.props;
    return (
      <div>
        {visibleYoutubeApps && (
          <div className="fixed z-20 top-[3.25rem] mx-2 right-4 border-gray-200 border-b border-l border-r bg-white">
            <a
              className="flex items-center h-10 p-4 my-2 hover:bg-gray-100 cursor-pointer"
              href="https://tv.youtube.com/welcome/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273&utm_servlet=prod"
            >
              <YoutubeTVIcon className="w-5" />
              <span className="ml-6 text-sm">YouTube TV</span>
            </a>

            <hr className="border-gray-300" />
            <a
              className="flex items-center h-10 p-4 mt-2 hover:bg-gray-100 cursor-pointer"
              href="https://music.youtube.com"
            >
              <YoutubeMusicIcon className="w-5" />
              <span className="ml-6 text-sm">YouTube Music</span>
            </a>
            <a
              className="flex items-center h-10 p-4 mb-2 hover:bg-gray-100 cursor-pointer"
              href="https://www.youtubekids.com/?source=youtube_web"
            >
              <YoutubeKidsIcon className="w-5" />
              <span className="ml-6 text-sm">YouTube Kids</span>
            </a>
            <hr className="border-gray-300" />
            <a
              className="flex items-center h-10 p-4 my-2 hover:bg-gray-100 cursor-pointer"
              href="https://artists.youtube.com"
            >
              <YoutubeArtistsIcon className="w-5" />
              <span className="ml-6 text-sm">YouTube for Artists</span>
            </a>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visibleYoutubeApps: state.modalWindows.visibleYoutubeApps,
  };
};

export default connect(mapStateToProps)(ModalYouTubeApps);
