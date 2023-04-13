import React, { useState } from "react";

import MovieList from "./components/MovieList";
import Filter from "./components/Filter ( title, rate)";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Final Fantasy XV",
      description:
        "Final Fantasy XV, annoncé originellement sous le titre Final Fantasy Versus XIII, est un jeu vidéo de la célèbre série Final Fantasy, développé et édité par Square Enix, sorti le 29 novembre 2016",
      posterURL: "https://raw.githubusercontent.com/drminnaar/react-movie-cards/master/src/images/Kingsglaive_Final_Fantasy_XV.jpg",
      rating: 9.2,
    },
    {
      title: "Final Fantasy Spirits Within",
      description:
        "C'est un film américano-japonais de Hironobu Sakaguchi (créateur de la série de jeux vidéo Final Fantasy) et Motonori Sakakibara, sorti le 15 août 2001. ",
      posterURL: "https://raw.githubusercontent.com/drminnaar/react-movie-cards/master/src/images/Final_Fantasy_Spirits_Within.jpg",
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
