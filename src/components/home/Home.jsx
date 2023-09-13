import React, { useEffect, useState } from 'react'
import './home.css'
import Hero from '../hero/Hero'
import {AiOutlineRight} from 'react-icons/ai'
import MovieCard from '../movies/MovieCard';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { getTopMovies, posterSizes, IMAGE_BASE_URL } from '../../microservice/tmdb';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    const initData = async () => {
      const movies = await getTopMovies();
      if (!movies || !movies.length) {
        return;
      }
      setTopMovies(movies);
    }

    if (!topMovies || !topMovies.length) {
      initData();
    }
  }, [topMovies]);
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
            {topMovies.map(movie => <MovieCard movieId={movie.id} image={`${IMAGE_BASE_URL}${posterSizes.w154}${movie.poster_path}`} title={movie.title} imdbRating={movie.popularity} rottenTomatoesRating={movie.vote_average} />)}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home

