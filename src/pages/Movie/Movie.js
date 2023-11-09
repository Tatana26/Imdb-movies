import React from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";
import NavBar from "../../components/NavBar/NavBar";
import imdbIcon from "./images/imdb_icon.png";
import Footer from "../../components/Footer/Footer";

const Movie = () => {
  const { movieId } = useParams();
  const [moviesData, isLoading, error] = useFetch(
    `https://imdb-top-100-movies.p.rapidapi.com/${movieId}`
  );

  return (
    <div className="moviePage">
      <NavBar></NavBar>
      <div className="movieContent">
        <img className="image" src={moviesData.image} alt=""></img>
        <div className="movieInfo">
          <div className="title-ratingContainer">
            <h1 className="movieTitle">{moviesData.title}</h1>
            <p className="movieRating">{moviesData.rating}</p>
            <img className="imdbIcon" src={imdbIcon} alt=""></img>
          </div>
          <p className="movieDirector">{moviesData.director}</p>
          <p className="movieGenre">{`${moviesData.genre}`}</p>
          <p className="movieWriters">{moviesData.writers}</p>
          <p className="movieYear">{moviesData.year}</p>
          <p className="movieDescription">{moviesData.description}</p>
          <p>{}</p>
          <iframe
            title="YouTube Video"
            width="700"
            height="400"
            src={moviesData.trailer_embed_link}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Movie;
