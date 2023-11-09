import { useEffect, useState } from "react";
import { fetchMovies } from "../../api";

const useFetch = (url) => {
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchMovies(url)
      .then((data) => {
        setMoviesData(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [url]);

  return [moviesData, error, isLoading];
};

export default useFetch;
