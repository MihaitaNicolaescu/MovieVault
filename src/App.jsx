import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import WatchedList from './components/WatchedList.jsx'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar.jsx'
import MovieDetails from './components/MovieDetails.jsx'

function App() {

  const [movieDetails, setMovieDetails] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);

  return (
    <div className='bg-[#2e343d]-500'>
      <div className='place-items-center'>
        <Navbar/>
      </div>
     <div className='place-items-center'>
      <div className='flex h-[500px] w-1/2 m-1 items-center gap-0'>
        <Card>
          <MovieList setMovieDetails={setMovieDetails}/>
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
