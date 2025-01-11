import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import MovieList from './components/Movie/MovieList'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import DetailsPanel from './components/DetailsPanel.jsx'

function App() {

  const [movieDetails, setMovieDetails] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.addEventListener('keydown', escapePressed);

    return () => {
        document.removeEventListener('keydown', escapePressed);
    }
  }, [])

  function escapePressed(event){
      if (event.key === 'Escape') {
          setMovieDetails(null);
      }
  }

  return (
   <>
      <Navbar setMovies={setMovies}  movies={movies}/>
      <Main>
        <Card>
          <MovieList setMovieDetails={setMovieDetails} movies={movies}/>
        </Card>
        <Card>
         <DetailsPanel movieDetails={movieDetails} watchedMovies={watchedMovies} setMovieDetails={setMovieDetails} setWatchedMovies={setWatchedMovies} />
        </Card>
      </Main>
    </>
  )
}

export default App
