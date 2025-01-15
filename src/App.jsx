import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import MovieList from './components/Movie/MovieList'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import DetailsPanel from './components/DetailsPanel.jsx'
import { useMovies } from './components/CustomHooks/useMovies.jsx'

function App() {

  const [movieDetails, setMovieDetails] = useState(null);
  const [searchMovie, setSearchMovie] = useState('');

  const {movies , error} = useMovies({searchMovie});

  return (
   <>
      <Navbar movies={movies} setSearchMovie={setSearchMovie} searchMovie={searchMovie}/>
      <Main>
        <Card>
          <MovieList setMovieDetails={setMovieDetails} movies={movies} error={error}/>
        </Card>
        <Card>
          <DetailsPanel movieDetails={movieDetails} setMovieDetails={setMovieDetails} />
        </Card>
      </Main>
    </>
  )
}

export default App
