import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieTile({data, setMovieDetails, isOnWatchList, setWatchedMovies, watchedMovies}) {

    const getYear = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        return `${year}`;
    };

    function removeMovie(){
        data.givedScore = null;
        setMovieDetails(data);
        setMovieDetails(null);
        setWatchedMovies(watchedMovies.filter(movie => movie.title !== data.title));
    }

    return (
        <div id="movie-tile" className={`${isOnWatchList == undefined ? 'hover:bg-gray-700 hover:cursor-pointer' : ''}`}  onClick={() => {isOnWatchList === undefined && setMovieDetails(data)}}>
            <div className="border-b-2 w-full border-gray-700">
                <div className="flex ml-2 mt-2">
                    <img className="h-20 mb-2" src={data.cover_image} alt="movieImg"/>
                    <div className="flex flex-col text-left gap-1 ml-5">
                        <p className="font-bold text-gray-300 text-[17px]">{data.title}</p>
                        <div className="grid grid-flow-col font-semibold text-gray-300 text-[14px]">
                            <p>🗓️ {getYear(data.release_date)}</p>
                            {
                                isOnWatchList !== undefined && isOnWatchList === true  && (
                                    <p className="ml-2">🌟 {data.givedScore}</p>
                                )
                            }
                            <p className="ml-2">⭐ {data.score}</p>
                            <p className="ml-2">⌛ {data.duration} min</p>
                            {isOnWatchList !== undefined && isOnWatchList === true  && (
                                <button className="ml-10 w-5 h-5 flex items-center justify-center text-white hover:text-red-50 text-[12px] bg-red-600 hover:bg-red-800 rounded-full shadow-md focus:outline-none"
                                    onClick={() => removeMovie()}><FontAwesomeIcon icon={faTrash}/></button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieTile;