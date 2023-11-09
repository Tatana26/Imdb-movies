import React from "react";
import "./MovieSearchItem.css";

const MovieSearchItem = ({ title, image, director, rating, onClick }) => {
  return (
    <>
      <div onClick={onClick} className="searchMovieItem">
        <img src={image} alt="searchMovieItem_img"></img>
        <div className="movieInfo">
          <p className="title">{title}</p>

          <p className="director">{director}</p>
          <p className="rating">{rating}</p>
        </div>
      </div>
      <div className="underline"></div>
    </>
  );
};

export default MovieSearchItem;
