import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <>
      {" "}
      <Link to={"/add"}>add</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {movies.map((film) => (
          <MovieCard film={film} key={film.id} />
        ))}
      </div>
    </>
  );
};

export default MovieList;