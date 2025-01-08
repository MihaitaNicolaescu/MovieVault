import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import WatchedList from './components/Movie/WatchedList.jsx'
import MovieList from './components/Movie/MovieList'
import Navbar from './components/Navbar.jsx'
import MovieDetails from './components/Movie/MovieDetails.jsx'

function App() {

  const [movieDetails, setMovieDetails] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  return (
    <div className='bg-[#2e343d]-500'>
      <div className='place-items-center'>
        <Navbar setMovies={setMovies}  movies={movies}/>
      </div>
     <div className='place-items-center'>
      <div className='flex h-[500px] w-1/2 m-1 items-center gap-0'>
        <Card>
          <MovieList setMovieDetails={setMovieDetails} movies={movies}/>
        </Card>
        <Card>
          {movieDetails === null ? <WatchedList watchedMovies={watchedMovies} setMovieDetails={setMovieDetails} setWatchedMovies={setWatchedMovies}/> : <MovieDetails data={movieDetails} setMovieDetails={setMovieDetails} watchedMovies={watchedMovies} setWatchedMovies={setWatchedMovies}/>}
        </Card>
      </div>
     </div>
    </div>
  )
}

export default App
