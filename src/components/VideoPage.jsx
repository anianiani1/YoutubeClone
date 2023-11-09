import React, { useState, useEffect } from "react";
import SuggestionCard from "./SuggestionCard";
import { AiOutlineLike, AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatDuotone } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import videos from "../data/videos";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { videoId } = useParams();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const video = videos.find((video_from_js) => video_from_js.id === videoId);
  const randomSubscriberCount = Math.floor(Math.random() * 1000000);

  useEffect(() => {
    // Check if the user is subscribed by verifying the token
    // For now, let's assume the user is subscribed if there is a token
    setIsSubscribed(!!localStorage.getItem(video.channelId));
  }, [isSubscribed]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleToggleSubscription = () => {
    if (isSubscribed) {
      // If already subscribed, unsubscribe
      localStorage.removeItem(video.channelId);
    } else {
      // If not subscribed, subscribe
      localStorage.setItem(video.channelId, "subscribed");
    }
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="videoPage">
      <div className="videoItem">
        <iframe
          className="iframe-video"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="description">
          <div className="mixed-group">
            <img
              className="channelImage"
              src={`https://robohash.org/${video.channelId}`}
              alt=""
            />
            <div className="channelText">
              <p className="title">{video.channelName}</p>
              <p className="faded">{randomSubscriberCount} subscribers</p>
            </div>
            <button
              className={
                isSubscribed ? "unsubscribe-button" : "subscribe-button"
              }
              onClick={handleToggleSubscription}
            >
              {isSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </div>

          <div className="button-group">
            <button className="pill" onClick={handleLike}>
              {isLiked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}{" "}
              | <AiOutlineDislike size={20} />
            </button>
            <button className="pill">
              <PiShareFatDuotone size={20} /> Share
            </button>
            <button className="download-pill">
              <HiDownload size={20} /> Download
            </button>
          </div>
        </div>

        <br />

        <div className="description-text">
          <p className="title">{`${video.views} • ${video.uploadedAt}`} </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

      <div className="suggestionBar">
        {videos.map((video_from_js) => (
          <SuggestionCard video={video_from_js} key={video_from_js.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
