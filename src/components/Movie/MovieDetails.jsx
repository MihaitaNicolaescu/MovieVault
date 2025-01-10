import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function MovieDetails({data, setMovieDetails, watchedMovies, setWatchedMovies}) {
    const starsNumber = 10;
    const genres = {
        "28": "Action",
        "12": "Adventure",
        "16": "Animation",
        "35": "Comedy",
        "80": "Crime",
        "99": "Documentary",
        "18": "Drama",
        "10751": "Family",
        "14": "Fantasy",
        "36": "History",
        "27": "Horror",
        "10402": "Music",
        "9648": "Mystery",
        "10749": "Romance",
        "878": "Science Fiction",
        "10770": "TV Movie",
        "53": "Thriller",
        "10752": "War",
        "37": "Western"
      };
      

    const [score, setScore] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [alreadyReviewed, setAlreadyReviewed] = useState(false);

    useEffect(() => {
        setScore(data.givedScore);
        const movieInWatched = watchedMovies.find((movie) => movie.title === data.title);

        if (movieInWatched) {
            setAlreadyReviewed(true);
            setScore(movieInWatched.givedScore);
        }

        document.addEventListener('keydown', escapePressed);

    }, [])

    function addMovieToList(movieData){
        movieData.givedScore = score;
        setWatchedMovies([...watchedMovies, movieData]);
        setMovieDetails(null);
    }

    function escapePressed(event){
        if (event.key === 'Escape') {
            setMovieDetails(null);
        }
    }

    return (
        <div className="grid grid-flow-row ">
            <div className="relative">
                <button className="z-10 absolute left-2 top-2 w-6 h-6 flex items-center justify-center text-gray-800 hover:text-gray-50 text-[10px] bg-white hover:bg-gray-600 rounded-full shadow-md focus:outline-none"
                    onClick={() => {setMovieDetails(null)}}><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>
            <div className="flex">
                <img className="w-[110px] h-[170px]" src={data.poster_path ? `https://image.tmdb.org/t/p/original${data.poster_path}` : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-204x300.jpg'} alt="cover-image-movie" />
                <div className="bg-gray-700 w-full flex">
                    <div className="grid grid-flow-row mt-2 left-0 ml-5 text-left">
                        <p className="text-white font-semibold text-[17px]">{data.original_title}</p>
                        <p className="text-white text-[13px]">{Array.isArray(data.genre_ids) && data.genre_ids.length > 0 ? data.genre_ids.map(id => genres[id]).join(', ') : 'No genres available'}</p>
                        <p className="text-white text-[13px]">🌟{data.vote_average} IMDb rating</p>
                    </div>
                </div>
            </div>
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
                                        <p className="text-yellow-400 font-bold text-center pl-2 text-[19px]">
                                            {hoverIndex !== -1 ? hoverIndex + 1 : score}
                                        </p>
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
                            <>
                                <div className="flex items-center justify-center mt-2 mb-2">
                                    <p className="text-gray-300">You already rated this movie {score} 🌟</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="grid grid-flow-row font-semibold text-gray-300 text-[12px] text-left ml-10 mr-10 mt-4">
                    <p className="italic mt-2">{data.overview}</p>
                    <p className="mt-2">{Array.isArray(data.genre_ids) && data.genre_ids.length > 0 ? data.genre_ids.map(id => genres[id]).join(', ') : 'No genres available'}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;