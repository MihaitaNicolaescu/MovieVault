import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import InfoTile from './components/InfoTile'
import MovieList from './components/MovieList'
import Navbar from './components/navbar'
import MovieDetails from './components/MovieDetails.jsx'

function App() {

  const [movieDetails, setMovieDetails] = useState(null);

  return (
    <div className='bg-[#2e343d]-500'>
      <div className='place-items-center'>
        <Navbar/>
      </div>
     <div className='place-items-center'>
      <div className='flex h-96 w-1/2 m-1 items-center gap-0'>
        <Card>
          <MovieList setMovieDetails={setMovieDetails}/>
        </Card>
        <Card>
          {movieDetails === null ? <InfoTile/> : <MovieDetails data={movieDetails} setMovieDetails={setMovieDetails}/>}
        </Card>
      </div>
     </div>
    </div>
  )
}

export default App
