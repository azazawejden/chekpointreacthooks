import React, { useState } from 'react';
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter ( title, rate)";



const App = () => {
  const [movies, setMovies] = useState([
  {
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterURL: 'https://www.movieposter.com/posters/archive/main/41/MPW-20708',
    rating: 9.2,
  },
  {
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterURL: 'https://www.movieposter.com/posters/archive/main/15/A70-7847',
    rating: 9.3,
  },
]);

  const [handleTitleChange, sethandleTitleChange] = useState('');
  const [handleRatingChange, sethandleRatingChange] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
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
  )
  }

export default App;