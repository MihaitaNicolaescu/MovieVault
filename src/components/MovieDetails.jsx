import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function MovieDetails({data, setMovieDetails, savedMovies, setSavedMovies}) {
    const starsNumber = 10;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    const [score, setScore] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(-1);

    function addMovieToList(movieData){
        movieData.givedScore = score;
        setSavedMovies([...savedMovies, movieData]);
        setMovieDetails(null);
    }

    return (
        <div className="grid grid-flow-row ">
            <div className="relative">
                <button className="z-10 absolute left-2 top-2 w-6 h-6 flex items-center justify-center text-gray-800 hover:text-gray-50 text-[10px] bg-white hover:bg-gray-600 rounded-full shadow-md focus:outline-none"
                    onClick={() => {setMovieDetails(null)}}><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>
            <div className="flex">
                <img className="w-[110px] h-[170px]" src={data.cover_image} alt="cover-image-movie" />
                <div className="bg-gray-700 w-full flex">
                    <div className="grid grid-flow-row mt-2 left-0 ml-5 text-left">
                        <p className="text-white font-semibold text-[17px]">{data.title}</p>
                        <p className="text-white text-[13px]">{formatDate(data.release_date)} <strong>·</strong> {data.duration} min</p>
                        <p className="text-white text-[13px]">{data.genres.join(', ')}</p>
                        <p className="text-white text-[13px]">🌟{data.score} IMDb rating</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-row">
                <div className="bg-gray-700 mt-8 mr-10 ml-10 rounded">
                    <div className="grid grid-flow-row">
                        <div className="flex items-center justify-center">

                            {Array.from({ length: starsNumber }).map((_, index) => (
                                    <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    className={`mt-2 mb-2 text-[18px] transition-colors duration-200 ${
                                        index < (hoverIndex !== -1 ? hoverIndex + 1 : score) ? 'text-yellow-400' : 'text-gray-400'
                                    }`}
                                    onClick={() => setScore(index + 1)}
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(-1)}
                                    />
                                ))}
                        </div>
                        <div className="flex items-center justify-center mt-2 mb-2">
                            {score > 0 && (
                                <button className="bg-purple-800 text-white w-1/2 pl-2 pr-2 pt-1 pb-1 text-[13px] mb-3 rounded-lg hover:bg-purple-700" onClick={() => {addMovieToList(data)}}>+ Add to list</button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-row font-semibold text-gray-300 text-[12px] text-left ml-10 mr-10 mt-4">
                    <p className="italic mt-2">{data.summary}</p>
                    <p className="mt-2">{data.cast.join(', ')}</p>
                    <p className="mt-2"> Directed by {data.director}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;