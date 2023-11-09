import React, { useState } from "react";
import "./MovieSearch.css";
import useFetch from "../../hooks/useFetch/useFetch";
import MovieSearchItem from "../MovieSearchItem/MovieSearchItem";
import { useNavigate } from "react-router-dom";

const MovieSearch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [moviesData, error, isLoading] = useFetch(
    "https://imdb-top-100-movies.p.rapidapi.com/top100movies"
  );

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredMovies = search
    ? moviesData.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const onClick = (movieId) => {
    navigate(`/Movie/${movieId}`);
  };

  return (
    <div className="search">
      <input
        className="searchInput"
        type="text"
        placeholder="Search movie here"
        onChange={onChange}
      />
      {search && (
        <ul className="searchMovieList">
          {filteredMovies.map((movie) => (
            <MovieSearchItem
              onClick={() => onClick(movie.id)}
              key={movie.id}
              title={movie.title}
              image={movie.image}
              director={movie.director}
              rating={movie.rating}
            ></MovieSearchItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearch;
