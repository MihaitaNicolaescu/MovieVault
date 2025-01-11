import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import MovieDetails from "./Movie/MovieDetails";
import WatchedList from "./Movie/WatchedList";
import BackButton from "./Buttons/BackButton";
import MovieCard from "./Movie/MovieCard";
import Review from "./Review/Review";
import MovieDescription from "./Movie/MovieDescription";
import { useState } from "react";

function DetailsPanel({movieDetails, setMovieDetails}){
    const [watchedMovies, setWatchedMovies] = useState([]);

    if(movieDetails === null){
        return (
            <>
                <WatchedList watchedMovies={watchedMovies} setMovieDetails={setMovieDetails} setWatchedMovies={setWatchedMovies}/>
            </>
        )
    } else {
        return (
            <>
                <MovieDetails>
                    <BackButton icon={faArrowLeft} action={() => {setMovieDetails(null)}}/>
                    <MovieCard data={movieDetails} />
                    <Review setWatchedMovies={setWatchedMovies} setMovieDetails={setMovieDetails} watchedMovies={watchedMovies} data={movieDetails}></Review>
                    <MovieDescription data={movieDetails} />
                </MovieDetails>
            </>
        )
    }
}

export default DetailsPanel;