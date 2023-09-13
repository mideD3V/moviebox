import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./movies.css";
import Logo2 from "../../assets/Logo2.png";
import Poster from "../../assets/Poster1.png";
import Imdb from "../../assets/imdb-logo.png";
import Fruit from "../../assets/fruit1.png";
import { Link } from "react-router-dom";
import { getMovieDetail, IMAGE_BASE_URL, backdropSizes } from '../../microservice/tmdb';

// For sidebar
import { GrHomeRounded } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayThin } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { MdLogout } from "react-icons/md";
import { GiTicket } from "react-icons/gi";
import { RiMenuAddLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";


// For preview
import Preview from "../../assets/trailer.png";
import Star from "../../assets/Star.png";
import Morepx from "../../assets/more.png";

const Movies = ({title, releaseYear, description, genre, videoUrl, runtime}) => {
  const {id: movieId} = useParams();
  const [movieDetail, setMovieDetail] = useState(undefined);
  
  
  //   const getMovie = () => {
    //     fetch(
      //       "https://api.themoviedb.org/3/discover/movie?api_key=d5c5ab889cf4861dca870380ef588fde"
      //     )
      //       .then((response) => response.json)
      //       .then((data) => data);
      // }
      
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const initData = async () => {
      const movieDetailData = await getMovieDetail(movieId);
      setMovieDetail(movieDetailData);
    }
    initData();
  }, [movieId]);

  if (!movieDetail) {
    return <></>
  }

  return (
    <div id="movies">
      {/* SIDE BAR */}
      <div id="sidebar">
        <Link id="logo" to="/">
          <img src={Logo2} alt="" />
        </Link>

        {/* Navlinks */}
        <div id="navlinks">
          <Link to="/" classssName="navlink">
            <span className="icon">
              <GrHomeRounded />
            </span>
            Home
          </Link>

          <Link to="/movies" classssName="navlink">
            <span className="icon">
              <BiCameraMovie />
            </span>
            Movies
          </Link>

          <Link to="/tvseries" classssName="navlink">
            <span className="icon">
              <PiMonitorPlayThin />
            </span>
            TV Series
          </Link>

          <Link to="/upcoming" classssName="navlink">
            <span className="icon">
              <SlCalender />
            </span>
            Upcoming
          </Link>
        </div>
        <Link id="logout">
          <span>
            <MdLogout />
          </span>
          Log out
        </Link>
      </div>



      {/* PREVIEW */}
      <div id="preview">
        <div className="preview_img">
          <img src={`${IMAGE_BASE_URL}${backdropSizes.w1280}${movieDetail.backdrop_path}`} alt="movie preview" />
          {/* <video src={videoUrl} /> */}
        </div>

        <div className="descriptions">
          <div className="movie_desc">
            <p className="movie_title">
              <b>{movieDetail.title} • {new Date(movieDetail.release_date).getFullYear()} • PG-13 • {movieDetail.runtime} mins </b>
              {
                movieDetail.genres.map(({id, name}) => <span className="tag">{name}</span>)
              }
            </p>
            <p className="story">
              {movieDetail.overview}
            </p>
            <p>
              Director : <span className="red"> Joseph Kosinski</span>
            </p>
            <p>
              Writers :{" "}
              <span className="red">Jim Cash, Jack Epps Jr, Peter Craig</span>
            </p>
            <p>
              Stars :{" "}
              <span className="red">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>
            <div className="top-rated">
              <span className="top">Top rated movie #65</span>
              <select htmlFor="">
                <option selected>Awards 9 nominations</option>
                <option> Lorem ipsum dolor sit Dignissimos.</option>
                <option>Amet consectetur adipisicing elit.</option>
              </select>
              {/* <span>
                {" "}
                <BsChevronDown />{" "}
              </span> */}
            </div>
          </div>

          <div className="rating_ctn">
            <div className="movie_rating">
              <img src={Star} alt="star" />
              <p>
                {" "}
                <span className="rate">8.5 </span> | 350k
              </p>
            </div>
            <Link to="" className="showtime">
              <span className="icon">
                {" "}
                <GiTicket />{" "}
              </span>
              See Showtimes
            </Link>
            <Link to="" className="more">
              <span className="icon">
                {" "}
                <RiMenuAddLine />{" "}
              </span>
              More watch options
    
            </Link>
            <img src={Morepx} alt="more" />
          </div>
        </div>
      </div>
    </div>
  );
};

Movies.defaultProps = {
  image: Poster,
  runtime: '2:30',
  title: "Movie Title",
  releaseYear: '2000',
  rating: "12%",
  directors: 'Director name',
  
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit iure aliquid similique illo praesentium officia quas expedita. Provident doloremque tempore accusamus nobis architecto harum reiciendis labore, corporis molestias repellat." ,
  genre: "Action, Adventure, Thriller",
  videoUrl: '',
};

export default Movies;
