import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoadinding, SetisLoading] = useState(false);
  async function FetchDataHandler() {
    SetisLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transFormedData = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        releaseDate: movieData.release_date,
        openingText: movieData.opening_crawl,
      };
    });
    setMovies(transFormedData);
    SetisLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={FetchDataHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoadinding && <MoviesList movies={movies} />}
        {isLoadinding && <p>Loading.....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
