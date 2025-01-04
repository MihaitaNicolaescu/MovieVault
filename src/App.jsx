import './App.css'
import Card from './components/Card'
import MovieList from './components/MovieList'
import Navbar from './components/navbar'

function App() {

  return (
    <div className='bg-[#2e343d]-500'>
      <div className='place-items-center'>
        <Navbar/>
      </div>
     <div className='place-items-center'>
      <div className='flex h-96 w-1/2 m-1 items-center gap-0'>
        <Card>
          <MovieList/>
        </Card>
        <Card/>
      </div>
     </div>
    </div>
  )
}

export default App
