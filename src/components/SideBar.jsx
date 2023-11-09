import React from "react";
import {
  FaHome,
  FaPlay,
  FaRegListAlt,
  FaUser,
  FaHistory,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      <button>
        <FaHome className="icon" />
        Home
      </button>
      <button>
        <FaPlay className="icon" />
        Shorts
      </button>
      <button>
        <FaRegListAlt className="icon" />
        Subscriptions
      </button>
      <button>
        <FaUser className="icon" />
        You
      </button>
      <button>
        <FaHistory className="icon" />
        History
      </button>
    </div>
  );
};

export default SideBar;
