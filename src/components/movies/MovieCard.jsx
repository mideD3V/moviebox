import React from "react";
import "./movies.css";
import Poster from "../../assets/Poster1.png";
import Imdb from "../../assets/imdb-logo.png";
import Fruit from "../../assets/fruit1.png";
import { Link } from "react-router-dom";


const MovieCard = ({ image, title, movieId, releaseYear, imdbRating, rottenTomatoesRating }) => {
  return (
    <Link to={`/movies/${movieId}`} id="movie_card" data-testid="movie-card">
      <img src={image} alt="poster" id="poster" data-testid="movie-poster" />
      <p className="releaseYear" data-testid:movie="release-date">
        Year - {new Date(releaseYear).getFullYear()}
      </p>
      <h3 data-testid="movie-title">{title}</h3>
      <div className="movie-rating">
        <div className="imdb">
          <img src={Imdb} alt="imdb rating" />
          <span className="rate">{imdbRating / 100}/100</span>
        </div>

        <div className="imdb">
          <img src={Fruit} alt="fruit rating" id="fruit" />
          <span className="rate">{rottenTomatoesRating * 10}%</span>
        </div>
      </div>
      {/* <div id="movie-genre">{genre}</div> */}
    </Link>
  );
};

MovieCard.defaultProps = {
  movieId: "id",
  releaseYear: "2009",
  image: Poster,
  title: "Movie Title",
  imdbRating: "12",
  rottenTomatoesRating: "72",
  // genre: "Action, Adventure, Thriller",
};
export default MovieCard;

// d5c5ab889cf4861dca870380ef588fde