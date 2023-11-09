import React from "react";
import "./MovieList.css";
import useFetch from "../../hooks/useFetch/useFetch";
import MovieCard from "../MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";

const MovieList = ({ genre, title }) => {
  const [moviesData] = useFetch(
    "https://imdb-top-100-movies.p.rapidapi.com/top100movies"
  );
  const navigate = useNavigate();

  console.log(moviesData);
  const movieList = moviesData.filter((movie) =>
    movie.genre[0].toLowerCase().includes(genre)
  );

  const onClick = (movieId) => {
    navigate(`/Movie/${movieId}`);
  };

  return (
    <div className="movie-section">
      <h1 className="list-title">{`${title} Movies`}</h1>
      <div className="movie-list">
        {movieList.map((movie) => (
          <MovieCard
            onClick={onClick.bind(this, movie.id)}
            key={movie.id}
            image={movie.image}
            title={movie.title}
            rating={movie.rating}
            director={movie.director}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
