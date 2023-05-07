import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { idmovie } = useParams();
  //   console.log(params);
  let movie = movies.find((el) => el.id == idmovie);
  return (
    <div>
      <p>{movie.name}</p>
      <p>{movie.desc}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Link to={`/`}>
        <button variant="primary">Go somewhere</button>
      </Link>
    </div>
  );
};

export default MovieDetails;