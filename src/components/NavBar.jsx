import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    // Remove the token from localStorage or perform any other logout logic
    localStorage.removeItem("token");
    // Redirect to home page
    navigate("/");
  };

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="navbar">
      <GiHamburgerMenu />
      <img
        className="yt-logo"
        src="../src/assets/YT logo.png"
        alt=""
        onClick={handleClick}
      />
      <div className="search-container">
        <input className="searchBar" placeholder="  Search" />
        <button className="searchButton">
          <FiSearch size={20} />
        </button>
      </div>
      {isAuthenticated ? (
        <>
          <img
            className="channelImage"
            src="https://robohash.org/7"
            onClick={handleLogoutClick}
          />
        </>
      ) : (
        <button className="signInButton" onClick={handleSignInClick}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default NavBar;
