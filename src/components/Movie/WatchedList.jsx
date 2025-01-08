import { useEffect, useState } from "react";
import MovieTile from "./MovieTile";

function WatchedList({watchedMovies, setMovieDetails, setWatchedMovies}) {

    const [medianScore, setMedianScore] = useState(null);
    const [totalMovies, setTotalMovies] = useState(null);
    const [totalTime, setTotalTime] = useState(null);

    useEffect(() => {
        let totalTimeCalc = 0;
        let totalScore = 0;
    
        watchedMovies.forEach((movieData) => {
            totalTimeCalc += movieData.duration;
            totalScore += movieData.vote_average;
        });
    
        totalScore = watchedMovies.length > 0 ? totalScore / watchedMovies.length : 0

        setTotalTime(totalTimeCalc);
        setMedianScore(totalScore.toFixed(1));
        setTotalMovies(watchedMovies.length);
    }, [watchedMovies]); 
    

    return (
        <div className="info-tile">
            <div className="grid grid-flow-row w-full h-20 border-gray-500 bg-gray-600 border-b-0">
                <div className="m-3">
                    <div className="flex ml-10 text-white text-[18px] font-semibold">
                        <p>Your Movie Journey</p>
                    </div>
                    <div className="grid grid-flow-col text-white text-[13px]">
                        <p className="font-bold">🍿 {totalMovies} movies</p>
                        <p className="font-bold">🌟 {medianScore}</p>
                    </div>
                </div>
                <div className="mt-2">
                    {watchedMovies.map(movie => (
                            <MovieTile key={movie.id} data={movie} isOnWatchList={true} setWatchedMovies={setWatchedMovies} watchedMovies={watchedMovies} setMovieDetails={setMovieDetails}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WatchedList;