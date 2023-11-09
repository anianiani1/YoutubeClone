import React from "react";

const SuggestionCard = ({ video }) => {
  return (
    <div className="suggestion-card">
      <img className="suggestion-thumbnail" src={video.thumbnail.url} alt="" />

      <div className="card-body">
        <div className="card-text">
          <p className="title">{video.title}</p>
          <p className="faded">{video.channelName}</p>
          <p className="faded">{`${video.views} • ${video.uploadedAt}`} </p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
