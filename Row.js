import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
// import {YouTube} from "react-youtube";
// import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  /*

  UseEffect is a block that runs according to a particular condition
  but by default it runs when the previous block has been updated / appeared
  -> [] tells to run once when row loads
  -> [movies] tells to run everytime when movie changes

  Remember whatever variable you use inside the use Effect, include that
  in the sensitivity list. Coz, the variable might update later on and 
  it should automatically update the existing function.

  */

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.table(request)
      setMovies(request.data.results);
      // return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // youtuber player parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // if (trailerUrl) {
    //   setTrailerUrl("");
    // } else {
    //   movieTrailer(
    //     movie.title || movie.name || movie.original_name || ""
    //   ).then(url => {
    //     const urlParams = new URLSearchParams(new URL(url).search);
    //     console.log(urlParams.get('v'));
    //   }).catch(error => console.log(error));
    // }

    
    console.table(movie)
  };

  // console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`moviePoster ${isLargeRow && "moviePosterLarge"}`}
            src={`https://image.tmdb.org/t/p/original${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {/* <YouTube videoId="GpFmSWJNyY4" opts={opts} /> */}
    </div>
  );
}

export default Row;
