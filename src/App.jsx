import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import InfoTile from './components/InfoTile'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar.jsx'
import MovieDetails from './components/MovieDetails.jsx'

function App() {

  const [movieDetails, setMovieDetails] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);

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
          {movieDetails === null ? <InfoTile/> : <MovieDetails data={movieDetails} setMovieDetails={setMovieDetails} savedMovies={savedMovies} setSavedMovies={setSavedMovies}/>}
        </Card>
      </div>
     </div>
    </div>
  )
}

export default App
