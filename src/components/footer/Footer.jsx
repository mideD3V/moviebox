import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer">
      <div className="socials">
        <AiFillFacebook className="social-icon" />{" "}
        <AiFillInstagram className="social-icon" />
        <AiFillTwitterSquare className="social-icon" />
        <AiFillYoutube className="social-icon" />
      </div>
      <div className="footer-links">
        <Link className="link">Conditions of use</Link>
        <Link className="link">Privacy & Policy</Link>
        <Link className="link">Press Room</Link>
      </div>
      <div className="copyright">
        {" "}
        &copy; 2021 MovieBox by{" "}
        <a
          href="http://www.twitter.com/ayobilli0ns"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Ayomide Oke
        </a>{" "}
      </div>
    </div>
  );
}

export default Footer