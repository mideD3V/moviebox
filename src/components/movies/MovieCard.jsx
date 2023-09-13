import React from "react";
import "./movies.css";
import Poster from "../../assets/Poster1.png";
import Imdb from "../../assets/imdb-logo.png";
import Fruit from "../../assets/fruit1.png";


const MovieCard = ({ title, genre }) => {
  return (
    <div id="movie_card">
      <img src={Poster} alt="" id="poster" />
      <p className="location">USA, 2008</p>
      <h3>{title}</h3>
      <div className="movie-rating">
        <div className="imdb">
          <img src={Imdb} alt="imdb rating" />
          <span className="rate">86/100</span>
        </div>

        <div className="imdb">
          <img src={Fruit} alt="fruit rating" id="fruit" />
          <span className="rate">97%</span>
        </div>
      </div>
      <div id="movie-genre">{genre}</div>
    </div>
  );
};

MovieCard.defaultProps = {
  image: { Poster },
  title: "Movie Title",
  rating: "12%",
  rating2: "72%",
  genre: "Action, Adventure, Thriller",
};
export default MovieCard;
