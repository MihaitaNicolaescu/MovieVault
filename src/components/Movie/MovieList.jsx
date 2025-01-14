import Error from "../Error";
import MovieTile from "../Movie/MovieTile";

function MovieList({setMovieDetails, movies, error}) {
    let content;

    if (error.length > 1) {
        content = <Error message={error} />;
    } else {
        content = movies.map(movie => (
            <MovieTile 
                key={movie.id} 
                data={movie} 
                setMovieDetails={setMovieDetails} 
            />
        ));
    }
    return (
        <>{content}</>
    )
}

export default MovieList;