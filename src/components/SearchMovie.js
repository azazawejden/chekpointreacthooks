import React from "react";
import { Rating } from "react-simple-star-rating";

const SearchMovie = ({ handleName, handleRating, handleReset, rating }) => {
  return (
    <div>
      <input type="text" onChange={(e) => handleName(e.target.value)} />
      <Rating initialValue={rating} onClick={handleRating} />
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default SearchMovie;