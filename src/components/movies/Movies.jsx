import React from 'react'
import './movies.css'
import Poster from '../../assets/Poster1.png'
import Imdb from '../../assets/imdb-logo.png'
import Fruit from '../../assets/fruit1.png'


const MovieCard = ({ poster, title, date, rating, rating2, genre }) => {
  

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f55319c4b400fb4bd2d9')
      .then((response) => response.json)
    .then((data)=> data)
}


  return (
    <div id='movie-card'>
      <img src={Poster} alt="" id="poster" /> 
      <h3>{title}</h3>
      <div className="movie-rating">
        <div className="imdb">
          <img src={Imdb} alt="" />
          <span className="rate">{rating}</span>
        </div>

        <div className="imdb">
          <img src={Fruit} alt="" />
          <span className="rate">{rating2}</span>
        </div>
      </div>
      <div id="movie-genre">{ genre}</div>
    </div>
  )
}

MovieCard.defaultProps = {
  image: { Poster },
  title: "Movie Title",
  rating: "12%",
  rating2: "72%",
  genre: "Action, Adventure, Thriller"
};

export default MovieCard