import React, { useState } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import { SignUp } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useFormik } from "formik";
import { schema } from "../../Schema";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const clickHandler = () => {
    setisLoading(true);
    SignUp(values)
      .then(() => {
        navigate(routes.signIn);
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
        email: "",
        password: "",
      },
      validationSchema: schema,
      onSubmit: clickHandler,
    });

  return (
    <div className="SignUp">
      <div className="SignUpContent">
        <div className="heading">
          <h1>Sign Up</h1>
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
            value={values.email}
            id="email"
            type="email"
            placeholder="email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "inputError" : ""}
          ></input>
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
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
              "Sign Up"
            )}
          </button>
        </form>
        <div className="form-text">
          <p className="">
            Allready have an account? <Link to={routes.signIn}>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
