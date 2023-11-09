import AuthGuard from "../Guards/AuthGuard";
import routes from "../constants/routes";
import Home from "../pages/HomePage/Home";
import MainPage from "../pages/MainPage/MainPage";
import Movie from "../pages/Movie/Movie";
import Movies from "../pages/MoviesPage/Movies";
import SignIn from "../pages/SignInPage/SignIn";
import SignUp from "../pages/SignUpPage/SignUp";
import UserNotFound from "../pages/UserNotFounPage/UserNotFound";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.signIn,
    Component: SignIn,
  },
  {
    path: routes.signUp,
    Component: SignUp,
  },

  {
    path: routes.userNotFound,
    Component: UserNotFound,
  },
  {
    path: routes.main,
    Component: MainPage,
    Guard: AuthGuard,
  },
  {
    path: routes.movie,
    Component: Movie,
    Guard: AuthGuard,
  },
  {
    path: routes.movies,
    Component: Movies,
    Guard: AuthGuard,
  },
];
