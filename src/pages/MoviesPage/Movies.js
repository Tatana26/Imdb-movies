import React from "react";
import "./Movies.css";
import useFetch from "../../hooks/useFetch/useFetch";
import NavBar from "../../components/NavBar/NavBar";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Movies = () => {
  const [moviesData, error, isLoading] = useFetch(
    `https://imdb-top-100-movies.p.rapidapi.com/`
  );
  const navigate = useNavigate();
  const onClick = (movieId) => {
    navigate(`/Movie/${movieId}`);
  };

  return (
    <div className="moviesPage">
      <NavBar></NavBar>
      <div className="movies">
        {moviesData.map((movie) => (
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
      <Footer></Footer>
    </div>
  );
};

export default Movies;
