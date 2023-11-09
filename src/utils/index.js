import jwt_decode from "jwt-decode";

export const parseToken = (token) => {
  return jwt_decode(token);
};

export const toggleStorage = (token) => {
  if (token) {
    localStorage.setItem("accessToken", token);
    console.log(token, "sigin");
  } else {
    localStorage.removeItem("accessToken");
    console.log(token, "signout");
  }
};
