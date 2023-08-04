const ApiKey = "5d14081ed9b8cc7d20a298bd5f037aa2";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${ApiKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${ApiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${ApiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${ApiKey}&with_genres=99`,
};
export default requests;
