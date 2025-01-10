import MovieTile from "../Movie/MovieTile";

function MovieList({setMovieDetails, movies}) {
    return (
        <div id="movie-list">
          {
            movies.map(movie => (
                <MovieTile key={movie.id} data={movie} setMovieDetails={setMovieDetails}/>
            ))
          }
        </div>
    )
}

export default MovieList;