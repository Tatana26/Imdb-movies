import React from "react";
import "./MainPage.css";
import NavBar from "../../components/NavBar/NavBar";
import MovieList from "../../components/MovieList/MovieList";
import { movieLists } from "../../config/movieList";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className="profile-view">
      <NavBar></NavBar>
      {movieLists.map((movieList) => (
        <MovieList
          genre={movieList.genre}
          title={movieList.title}
          key={movieList.genre}
        ></MovieList>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
