import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //   console.table(request.data.results)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  // console.log(movie);

  function truncate(str) {
    return String(str).length > 150 ? str.substr(0, 149) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original${movie.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movie.name || movie.title || movie.original_name}
        </h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">{truncate(movie.overview)}</h1>
      </div>
      <div className="banner--FadeBottom" />
      {/* whenever you are having a modifier, use it like */}
   
    </header>
  );
}

export default Banner;
