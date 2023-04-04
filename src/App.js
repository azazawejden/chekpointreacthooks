import React, { useEffect, useState } from 'react';
import MovieList from '.components/MovieList';
import Filter from '.components/Filter';
import MovieCard from '.components/MovieCard';


const App = () => {
  const { fullName, bio, imgSrc, profession } = this.state.Person;
  const { shows } = this.state;
  const { timeSinceMounted } = usestate;
  const [movies, setMovies] = useState([
   
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