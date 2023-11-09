import React, { useState } from "react";
import "./SignInForm.css";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { SignIn } from "../../api/auth";
import { BeatLoader } from "react-spinners";
import { signInAction } from "../../context/actions-creator";
import { useAppContext } from "../../context/AppContextProvider";
import { useFormik } from "formik";
import { schema, schemaSignIn } from "../../Schema";

const SignInForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const clickHandler = () => {
    console.log("1234");
    setisLoading(true);
    SignIn(values)
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

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      validationSchema: schemaSignIn,
      onSubmit: clickHandler,
    });

  return (
    <div className="SignUp">
      <div className="SignUpContent">
        <div className="heading">
          <h1>Sign In</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="form"
        >
          <input
            onChange={handleChange}
            value={values.userName}
            id="userName"
            type="text"
            placeholder="username"
            onBlur={handleBlur}
            className={errors.userName && touched.userName ? "inputError" : ""}
          ></input>
          {errors.userName && touched.userName && (
            <p className="error">{errors.userName}</p>
          )}
          <input
            onChange={handleChange}
            value={values.password}
            id="password"
            type="text"
            placeholder="password"
            onBlur={handleBlur}
            className={errors.password && touched.password ? "inputError" : ""}
          ></input>
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
          <button type="submit" className="signBtn">
            {isLoading ? (
              <BeatLoader className="loader"></BeatLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <div className="form-text">
          <p className="">
            dont have an account? <Link to={routes.signUp}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
