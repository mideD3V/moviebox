import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/Logo.png";
import Logo2 from "../../assets/tv.png";

import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import {HiMenuAlt4} from 'react-icons/hi';

const Header = ({loadSearchData}) => {
  const [searchTerm, setSearchTerm] = useState(undefined);

  return (
    <div id="header">
      <Link to="/" id="logo">
        <img src={Logo} alt="moviebox logo" className="logoBigScreen"/>
        <img src={Logo2} alt="moviebox logo" className="logoSmallScreen" />
      </Link>

      
      {/* SEARCH */}
      <div id="search">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          name="search"
          id="searchbox"
          placeholder="What fo you want to watch?"
        />
        <button
          rel="noreferrer"
          id="search-icon"
          onClick={() => loadSearchData(searchTerm)}
        >
          <BsSearch />
        </button>
      </div>

      
      
      {/*  ACCOUNT */}
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
