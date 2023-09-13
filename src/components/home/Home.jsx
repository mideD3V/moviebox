import React from 'react'
import './home.css'
import Hero from '../hero/Hero'
import {AiOutlineRight} from 'react-icons/ai'
import MovieCard from '../movies/MovieCard';
import Header from '../header/Header';

const Home = () => {
  return (
    <>
      {" "}
      <Header />
      <Hero />
      <div>
        <div id="body">
          <div className="featured-title">
            <h1>Featured Movie</h1>
            <p>
              See more{" "}
              <span>
                {" "}
                <AiOutlineRight />{" "}
              </span>
            </p>
          </div>

          <div id="movies-ctn">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home