import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContextProvider";
import { SignIn } from "../../api/auth";
import routes from "../../constants/routes";
import { signInAction } from "../../context/actions-creator";

const useAuthentication = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const clickHandler = () => {
    setisLoading(true);
    SignIn(user)
      .then((data) => {
        navigate(routes.main);
        dispatch(signInAction(data.token));
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  };
  const onChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return [isLoading, navigate, clickHandler, onChange, dispatch];
};

export default useAuthentication;
