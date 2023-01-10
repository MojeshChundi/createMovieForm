import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoadinding, SetisLoading] = useState(false);
  const [error, SetError] = useState(null);
  const[count,setcount]=useState(0)
  const FetchDataHandler = useCallback(async () => {
    SetisLoading(true);
    SetError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film/");
      if (!response.ok) {
        throw new Error("Something Went Wrong....Retrying!");
      }
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
    } catch (error) {
      SetError(error.message);
    }
    SetisLoading(false);
  }, []);

  useEffect(()=>{
  FetchDataHandler
  },[FetchDataHandler])
 

  const onError=()=>{
const timeint=setTimeout(()=>{
  setcount(prevcount=>prevcount+1)
  FetchDataHandler()
},3000)
console.log(count)

if(count>5){
  clearInterval(timeint)
}
  }

  let content = <p>No Movies Found!</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content =<div> <p>{error}</p><button onClick={()=>{setcount(prevcount=>prevcount+6)}}>stop</button></div>;
    onError()
    
  }

  if (isLoadinding) {
    content = <p>Loading.....</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={FetchDataHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
