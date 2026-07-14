const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer `,
  },
};

const fetchMovie = async (endpoint) => {
  const url = baseUrl + endpoint + "?language=en-US&page=1";

  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));

  return { response };
};

// const nowPlayingUrl = baseUrl + "movie/now_playing" + "language=en-US&page=1";
// const popularUrl = baseUrl + "movie/popular" + "language=en-US&page=1";
// const topRatedUrl = baseUrl + "movie/top_rated" + "language=en-US&page=1";
// const upcomingUrl = baseUrl + "movie/upcoming" + "language=en-US&page=1";

export const getNowPlaying = () => fetchMovie("movie/now_playing");
