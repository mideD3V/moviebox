import React from "react";
import "./header.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import {HiMenuAlt4} from 'react-icons/hi'

const Header = () => {
  return (
    <div id="header">
      <Link to="/" id="logo">
        <img src={Logo} alt="moviebox logo" />
      </Link>
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
          <HiMenuAlt4 id="hamburger" />
        </div>
      </div>
    </div>
  );
};

export default Header;
