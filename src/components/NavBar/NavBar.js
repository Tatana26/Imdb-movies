import React from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import "./Navbar.css";
import { useAppContext } from "../../context/AppContextProvider";
import { signOutAction } from "../../context/actions-creator";
import MovieSearch from "../MovieSearch/MovieSearch";
import imdbIcon from "./images/imdb_icon.png";
import logOutIcon from "./images/logOut.png";
import activeUserLogo from "./images/activeUser.png";

const NavBar = () => {
  const navigate = useNavigate();
  const {
    state: { user },
    dispatch,
  } = useAppContext();
  return (
    <nav className="mainNav">
      <img
        className="logo"
        src={imdbIcon}
        alt="logo"
        onClick={() => {
          navigate(routes.main);
        }}
      ></img>
      <MovieSearch></MovieSearch>
      <div className="navLeft">
        <div className="routes">
          <Link className="link" to={routes.main}>
            Main
          </Link>
          <Link className="link" to={routes.movies}>
            Movies
          </Link>
        </div>
      </div>
      <div className="navRight">
        <div className="user">
          <img
            className="activeUserLogo"
            src={activeUserLogo}
            alt="navIcon"
          ></img>
          <p>{user.userName}</p>
        </div>
        <img
          onClick={() => {
            dispatch(signOutAction());
            navigate(routes.signIn);
          }}
          className="logOutIcon"
          src={logOutIcon}
          alt="navIcon"
        ></img>
      </div>
    </nav>
  );
};

export default NavBar;
