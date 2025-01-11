import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Review({setWatchedMovies, setMovieDetails, watchedMovies, data}){
    const movieInWatched = watchedMovies.find((movie) => movie.title === data.title);

    const starsNumber = 10;
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [alreadyReviewed, setAlreadyReviewed] = useState(movieInWatched !== undefined);
    const [score, setScore] = useState(movieInWatched?.givedScore);

    function addMovieToList(movieData){
        movieData.givedScore = score;
        setWatchedMovies([...watchedMovies, movieData]);
        setMovieDetails(null);
    }

    return (
        <div className="grid grid-flow-row">
            <div className="bg-gray-700 mt-8 mr-10 ml-10 rounded">
                <div className="grid grid-flow-row">
                    {alreadyReviewed === false && (
                        <>
                            <div className="flex items-center justify-center mt-2">
                                {Array.from({ length: starsNumber }).map((_, index) => (
                                    <FontAwesomeIcon
                                        key={index + "star"}
                                        icon={faStar}
                                        className={`mt-2 mb-2 text-[18px] transition-colors duration-200 ${
                                            index < (hoverIndex !== -1 ? hoverIndex + 1 : score) ? 'text-yellow-400' : 'text-gray-400'
                                        }`}
                                        onClick={() => setScore(index + 1)}
                                        onMouseEnter={() => setHoverIndex(index)}
                                        onMouseLeave={() => setHoverIndex(-1)}
                                    />
                                ))}
                                {(hoverIndex !== -1 || score !== undefined) && (
                                    <p className="text-yellow-400 font-bold text-center pl-2 text-[19px]">{hoverIndex !== -1 ? hoverIndex + 1 : score}</p>
                                )}
                            </div>
                            <div className="flex items-center justify-center mt-2 mb-2">
                                {score > 0 && (
                                    <button className="bg-purple-800 text-white w-1/2 pl-2 pr-2 pt-1 pb-1 text-[13px] mb-3 rounded-lg hover:bg-purple-700" onClick={() => {addMovieToList(data)}}>+ Add to watched list</button>
                                )}
                            </div>
                        </>
                    )}
                    {alreadyReviewed === true && (
                        <div className="flex items-center justify-center mt-2 mb-2">
                            <p className="text-gray-300">You already rated this movie {score} 🌟</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Review;