import MovieTile from "../Movie/MovieTile";

function MovieList({setMovieDetails, movies}) {
    return (
        <>
         {
            movies.map(movie => (
                <MovieTile key={movie.id} data={movie} setMovieDetails={setMovieDetails}/>
            ))
          }
        </>
    )
}

export default MovieList;