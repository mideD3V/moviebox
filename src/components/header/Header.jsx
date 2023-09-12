import React from "react";
import "./header.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div id="header">
      <div id="logo">
        <img src={Logo} alt="moviebox logo" />
      </div>
      <div id="search">
        <input
          type="search"
          name="search"
          id="searchbox"
          placeholder="What fo you want to watch?"
        />
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          id="search-icon"
        >
          <BsSearch />
        </a>
      </div>
      <div id="account">
        <p>Sign In</p>
        <div id="menu">
          <span className="bar"> </span>
          <span className="bar"> </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
