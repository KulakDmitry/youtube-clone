import React, { Component } from "react";
import { ReactComponent as YoutubeTVIcon } from "../icons/youtube-TV.svg";
import { ReactComponent as YoutubeMusicIcon } from "../icons/youtube-music.svg";
import { ReactComponent as YoutubeKidsIcon } from "../icons/youtube-kids.svg";
import { ReactComponent as YoutubeArtistsIcon } from "../icons/youtube-artists.svg";

class ModalYouTubeApps extends Component {
  render() {
    const { visible } = this.props;
    return (
      <div>
        {visible && (
          <div className="fixed z-20 top-[3.25rem] mx-2 right-4 border-gray-200 border-b border-l border-r bg-white">
            <div className="flex items-center h-10 p-4 my-2 hover:bg-gray-100 cursor-pointer">
              <YoutubeTVIcon className="w-5" />
              <span className="ml-6 text-sm">YouTube TV</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex items-center h-10 p-4 mt-2 hover:bg-gray-100 cursor-pointer">
              <YoutubeMusicIcon className="w-5" />
              <span className="ml-6 text-sm">YouTube Music</span>
            </div>
            <div className="flex items-center h-10 p-4 mb-2 hover:bg-gray-100 cursor-pointer">
              <YoutubeKidsIcon className="w-5" />
              <span className="ml-6 text-sm">YouTube Kids</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex items-center h-10 p-4 my-2 hover:bg-gray-100 cursor-pointer">
              <YoutubeArtistsIcon className="w-5" />
              <span className="ml-6 text-sm">YouTube for Artists</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ModalYouTubeApps;
