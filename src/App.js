import React, { useState } from "react";

import MovieList from "./components/MovieList";
import Filter from "./components/Filter ( title, rate)";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Ready Player One",
      description:
        "In the year 2045, the real world is a harsh place. The only time Wade Watts (Tye Sheridan) truly feels alive is when he escapes to the OASIS, an immersive virtual universe where most of humanity spends their days",
      posterURL:
        "https://www.imdb.com/title/tt1677720/mediaviewer/rm2984408576/?ref_=tt_ov_i",
      rating: 9.2,
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://www.movieposter.com/posters/archive/main/15/A70-7847",
      rating: 9.3,
    },
  ]);

  const [handleTitleChange, sethandleTitleChange] = useState("");
  const [handleRatingChange, sethandleRatingChange] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(Number(event.target.value));
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
    );
  });
  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter
        title={titleFilter}
        rating={ratingFilter}
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
