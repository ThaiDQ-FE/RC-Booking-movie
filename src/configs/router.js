import HomePage from "../pages/Default-Role/Home";
import MovieAll from "../pages/Default-Role/Movie-All";

export const defaultRounter = [
  {
    path: "/",
    exact: true,
    Component: <HomePage />,
  },
  {
    path: "/movie-all",
    exact: true,
    Component: <MovieAll />,
  },
];
