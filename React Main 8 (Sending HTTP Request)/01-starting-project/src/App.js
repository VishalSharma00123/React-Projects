import React, { useEffect, useState, useCallback } from 'react';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState(null)

  // The 200 OK status code means that the request was successful, but the meaning of success depends on the request method used: GET: The requested resource has been fetched and transmitted to the message body.

  // we use Effect to prevent loop as  the data is getting fetched only once so we want to run the function only one time

  const fetchMoviesHandler = useCallback(async () => {
    setisLoading(true)
    setError(null)
    try {
      const response = await fetch('https://react-http-9fc74-default-rtdb.firebaseio.com/movies.json')

      if (!response.ok)//if fetching the data was not succesfull throw an error
      {
        throw new Error('Something went wrong')
      }

      const data = await response.json();
      console.log(data);

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText
        })
      }

      setMovies(loadedMovies);
      setisLoading(false)
    }
    catch (error) {
      console.log(error.message);
    }

    setisLoading(false)
  }, []);
  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])//we will pass  fetchMoviesHandler as the dependency because whenever the  fetchMoviesHandler function changes we want to re-render it again
  // jkshjds
  // we need to use async/await as we want this function to act asynchronously
  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-9fc74-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',//sending data to the server
        body: JSON.stringify(movie),//we want our data to be in json format so we will use JSON.stringify() to convert object in to JSON,json format is used to exchange  the information btwn frontent and backend
        header: {
          'Content-Type': 'application/json'//describing the content has json data
        }
      })//by using firebase we can not only fetch the data but also we can send the data to the server here we want to sne the data to the server so we will explicitly define the POST method 
    // in reponse firebase or backend will send the data we will first convert into Json() format
    const data = await response.json()
    console.log(data);
  }
  let content = <p>No Movie Found</p>
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    <p>is Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found No movies</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error.message}</p>}

      </section>
    </React.Fragment>
  );
}



export default App;
