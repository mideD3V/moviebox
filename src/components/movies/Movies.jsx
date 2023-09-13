import React, { useEffect } from "react";
import "./movies.css";
import Logo2 from "../../assets/Logo2.png";
import Poster from "../../assets/Poster1.png";
import Imdb from "../../assets/imdb-logo.png";
import Fruit from "../../assets/fruit1.png";
import { Link } from "react-router-dom";

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





const Movies = () => {
  //   const getMovie = () => {
  //     fetch(
  //       "https://api.themoviedb.org/3/discover/movie?api_key=d5c5ab889cf4861dca870380ef588fde"
  //     )
  //       .then((response) => response.json)
  //       .then((data) => data);
  // }

  //   useEffect(() => {
  //   getMovie()
  // })

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
          <img src={Preview} alt="movie preview" />
        </div>

        <div className="descriptions">
          <div className="movie_desc">
            <p className="movie_title">
              <b>Top Gun: Maverick • 2022 • PG-13 • 2h 10m </b>
              <span className="tag">Action</span>{" "}
              <span className="tag">Drama</span>
            </p>
            <p className="story"> yes yes
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
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
  image: { Poster },
  title: "Movie Title",
  rating: "12%",
  rating2: "72%",
  genre: "Action, Adventure, Thriller",
};

export default Movies;
