import "./App.css";
import SearchMovie from "./components/SearchMovie";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { listmovie } from "./data";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
function App() {
  const [movies, setmovies] = useState(listmovie);
  // add movies
  const handleAdd = (newmovie) => {
    // console.log(newmovie);
    setmovies([{ ...newmovie, id: Math.random() }, ...movies]);
  };
  // search by name
  const [searchByName, setsearchByName] = useState("");
  const handleName = (serchedvalue) => {
    setsearchByName(serchedvalue);
  };
  // search by Rate
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/add" element={<AddMovie handleAdd={handleAdd} />} />
        <Route
          path="/"
          element={
            <div>
              <SearchMovie
                rating={rating}
                handleReset={handleReset}
                handleName={handleName}
                handleRating={handleRating}
              />

              <MovieList
                movies={movies.filter(
                  (el) => el.name.includes(searchByName) && el.rating >= rating
                )}
              />
            </div>
          }
        />
        <Route
          path="/details/:idmovie"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </div>
  );
}

export default App;