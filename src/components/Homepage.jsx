import React from "react";
import VideoCard from "./VideoCard";
import SideBar from "./SideBar";
import videos from "../data/videos";

const HomePage = () => {
  return (
    <div className="main-flex-container">
      <div className="page">
        <SideBar />
        <div className="main">
          {videos.map((video_from_js) => (
            <VideoCard video={video_from_js} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
