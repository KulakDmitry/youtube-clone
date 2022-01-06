import React, { Component } from "react";

class VideoContent extends Component {
  viewCount = (str) => {
    let num;
    if (parseInt(str) > 1000) {
      num = str.slice(0, 1) + "K";
    }
    if (parseInt(str) > 1100) {
      num = str.slice(0, 2).split("").join(".") + "K";
    }
    if (parseInt(str) > 10000) {
      num = str.slice(0, 2) + "K";
    }

    if (parseInt(str) > 100000) {
      num = str.slice(0, 3) + "K";
    }

    if (parseInt(str) > 1000000) {
      num = str.slice(0, 1) + "M";
    }
    if (parseInt(str) > 1100000) {
      num = str.slice(0, 2).split("").join(".") + "M";
    }

    return num;
  };
  render() {
    const { state } = this.props;

    return (
      <div
        className={` ${
          state.openSideBar ? "ml-64" : "ml-16"
        } pt-32 bg-gray-50 h-fit grid gap-x-4 gap-y-8 grid-cols-4 grid-rows-auto p-14`}
      >
        {state.video.map((i) => (
          <div key={i.id}>
            <div className="relative">
              <img
                className="w-full"
                src={`${i.snippet.thumbnails.medium.url}`}
                alt=""
              />
              <span className="absolute bottom-0 right-1 rounded-sm text-white bg-black text-xs p-px mb-1">
                {i.contentDetails.duration.match(/\d+/g).join(":")}
              </span>
            </div>
            <div className="pt-4 ">
              <img
                className="inline rounded-full mr-4 float-left w-10 h-10"
                src={`${i.channelThumbnail}`}
                alt=""
              />
              <p className="flex flex-col">
                <span className="text-sm font-semibold line-clamp-2">
                  {i.snippet.title}
                </span>
                <span className="py-1 text-xs font-light">
                  {i.snippet.channelTitle}
                </span>

                <span className="text-xs font-light">
                  {this.viewCount(i.statistics.viewCount)} views /{" "}
                  {i.snippet.publishedAt}
                </span>
              </p>
            </div>
          </div>
        ))}

        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4 relative">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <span className="absolute bottom-24 right-1 rounded-sm text-white bg-black text-xs p-px mb-1">*/}
        {/*      12:58*/}
        {/*    </span>*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src="https://picsum.photos/350/200" alt="" />*/}
        {/*  <div className="pt-4">*/}
        {/*    <img*/}
        {/*      className="inline rounded-full mr-4 float-left"*/}
        {/*      src="https://picsum.photos/40/40"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p className="flex flex-col">*/}
        {/*      <span className="text-sm font-semibold ">*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
        {/*      </span>*/}
        {/*      <span className="py-1 text-xs font-light">nameChannel</span>*/}
        {/*      <span className="text-xs font-light">651k / 9 days ago</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default VideoContent;
