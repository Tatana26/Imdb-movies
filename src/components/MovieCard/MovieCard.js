import React from "react";
import "./MovieCard.css";
import imdbIcon from "./images/imdb_icon.png";

const MovieCard = ({
  title,
  thumbnail,
  rating,
  image,
  description,
  director,
  genre,
  imdb_link,
  trailer,
  writers,
  year,
  onClick,
  rank,
}) => {
  return (
    <div onClick={onClick} className="movieCard">
      <img className="moviecard-img" src={image} alt="movie_image"></img>
      <div className="movie-info">
        <h1 className="movie-title">{title}</h1>
        <p className="director">{director}</p>
        <div className="rating-imdb">
          <img className="imdbIcon" src={imdbIcon} alt="imdb_icon"></img>
          <p className="rating">{rating}</p>
        </div>
      </div>
      {/* <button onClick={onClick}>show more</button> */}
    </div>
  );
};

export default MovieCard;
