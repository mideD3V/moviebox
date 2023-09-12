import React from 'react'
import './home.css'
import Hero from '../hero/Hero'
import Movies from '../movies/Movies';
import {AiOutlineRight} from 'react-icons/ai'

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="body">
        <div className="featured-title">
          <h2>Featured Movie</h2>
          <p>
            See more <span> <AiOutlineRight/> </span>
          </p>
        </div>

        <div id="movies-ctn">
          <Movies />
        </div>
      </div>
    </div>
  );
}

export default Home