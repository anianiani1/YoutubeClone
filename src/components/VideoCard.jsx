import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to videoPage
    navigate(`/videos/${video.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img className="thumbnail" src={video.thumbnail.url} alt="" />

      <div className="card-body">
        <img
          className="channelImage"
          src={`https://robohash.org/${video.channelId}`}
          alt=""
        />

        <div className="card-text">
          <p className="title">{video.title}</p>
          <p className="faded">{video.channelName}</p>
          <p className="faded">{`${video.views} • ${video.uploadedAt}`} </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
