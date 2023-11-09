import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1 className="home-page-heading">
          Top 100 IMDB Movies. To see our content please Sign in or Sign up
        </h1>
        <div className="buttons">
          <button
            className="btn-home"
            onClick={() => {
              navigate(routes.signUp);
            }}
          >
            Sign Up
          </button>
          <button
            className="btn-home"
            onClick={() => {
              navigate(routes.signIn);
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
