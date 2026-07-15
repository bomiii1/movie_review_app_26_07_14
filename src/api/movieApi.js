const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzdkOTI0OGQ4NWIzYjdkODViYzJlZDI1MzY3YTA0YyIsIm5iZiI6MTc4Mzk5OTY4OS41MjEsInN1YiI6IjZhNTVhY2M5NDAyZmNjOGE1NWVmMjRiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EYrz_TUS86_p9qt_LChEXJtfG75VBim8kS21fxxaDzo`,
  },
};

const fetchMovie = async (endpoint) => {
  const url = baseUrl + endpoint + "?language=ko-kr&page=1";

  const response = await fetch(url, options).then((res) => res.json());
  // .then((json) => console.log(json))
  // .catch((err) => console.error(err));

  return { response };
};

// const nowPlayingUrl = baseUrl + "movie/now_playing" + "language=en-US&page=1";
// const popularUrl = baseUrl + "movie/popular" + "language=en-US&page=1";
// const topRatedUrl = baseUrl + "movie/top_rated" + "language=en-US&page=1";
// const upcomingUrl = baseUrl + "movie/upcoming" + "language=en-US&page=1";

export const getNowPlaying = () => fetchMovie("movie/now_playing");
export const getPopular = () => fetchMovie("movie/popular");
export const getTopRated = () => fetchMovie("movie/top_rated");
export const getUpcoming = () => fetchMovie("movie/upcoming");
