export const fetchMovies = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d2fd684c06msh5f355b976409180p1aa9d0jsn918a389b5b0d",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error("Something unexpected happened :(");
};
