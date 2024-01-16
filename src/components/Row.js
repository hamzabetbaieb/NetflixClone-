import React, { useEffect, useState } from "react";
import "./Row.scss";
import axios from "axios";
import { Link } from 'react-router-dom';


const Row = ({ title, fetchUrl, IsPoster }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div className="row">
      <h2 className="row_title">{title} </h2>
      <div className="row_images">
        {movies.map((movie) => (
          <div key ={movie.id}>
              <Link to={`/video/${movie.id}`}>
            {IsPoster ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                className="row_image"
                alt=""
              />
              
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                className="row_image"
                alt=""
              />
            )}
          </Link>
          <h6>{movie.title ||movie.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
