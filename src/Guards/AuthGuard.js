import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const {
    state: { isUserAuthenticated },
  } = useAppContext();

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate(routes.signIn);
    }
    console.log(isUserAuthenticated);
  }, [isUserAuthenticated, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
