import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import WatchedList from './components/Movie/WatchedList.jsx'
import MovieList from './components/Movie/MovieList'
import Navbar from './components/Navbar.jsx'
import MovieDetails from './components/Movie/MovieDetails.jsx'
import Main from './components/Main.jsx'

function App() {

  const [movieDetails, setMovieDetails] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  return (
   <>
      <Navbar setMovies={setMovies}  movies={movies}/>
      <Main>
        <Card>
          <MovieList setMovieDetails={setMovieDetails} movies={movies}/>
        </Card>
        <Card>
          {movieDetails === null ? <WatchedList watchedMovies={watchedMovies} setMovieDetails={setMovieDetails} setWatchedMovies={setWatchedMovies}/> : <MovieDetails data={movieDetails} setMovieDetails={setMovieDetails} watchedMovies={watchedMovies} setWatchedMovies={setWatchedMovies}/>}
        </Card>
      </Main>
    </>
  )
}

export default App
