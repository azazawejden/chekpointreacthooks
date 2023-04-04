import React from "react";
function MovieCard({ title, description, posterURL, rating }) {
    return (
      <div>
        <h2>{title}</h2>
        <img src={posterURL} alt={title} />
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
    );
  }
  export default MovieCard;