import React from 'react'
import './hero.css'
import { Link } from "react-router-dom";
import Imdb from "../../assets/imdb-logo.png";
import Fruit from "../../assets/fruit1.png";

import { BsPlayCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div id="hero">
      <div id="hero_text">
        <h1>John Wick 3 : Parabellum</h1>

        {/* Movie Rating */}
        <div className="movie-rating">
          <div className="imdb">
            <img src={Imdb} alt="imdb rating" />
            <span className="rate">86/100</span>
          </div>

          <div className="imdb">
            <img src={Fruit} alt="fruit rating" className='tomato'/>
            <span className="rate">97%</span>
          </div>
        </div>
        <div id="hero_description">
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
        </div>
        <Link to='movies' id="trailer_btn">
          <span className="play_icon">
            {" "}
            <BsPlayCircle />{" "}
          </span>
          WATCH TRAILER
        </Link>
      </div>
    </div>
  );
}

export default Hero