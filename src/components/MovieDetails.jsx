import { faArrowLeft, faBackward, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function MovieDetails({data, setMovieDetails}) {
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

    return (
        <div className="grid grid-flow-row ">
            <div className="relative">
                <button className="z-10 absolute left-2 top-2 w-6 h-6 flex items-center justify-center text-gray-800 hover:text-gray-50 text-[10px] bg-white hover:bg-gray-600 rounded-full shadow-md focus:outline-none"
                    onClick={() => {setMovieDetails(null)}}><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>
            <div className="flex">
                <img className="w-20 h-25" src={data.cover_image} alt="cover-image-movie" />
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
                <div className="bg-gray-700 mt-8 mr-10 ml-10">
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