function MovieCard({data}) {
    const genres = {
        "28": "Action","12": "Adventure","16": "Animation","35": "Comedy","80": "Crime","99": "Documentary",
        "18": "Drama","10751": "Family","14": "Fantasy","36": "History","27": "Horror","10402": "Music",
        "9648": "Mystery","10749": "Romance","878": "Science Fiction","10770": "TV Movie",
        "53": "Thriller","10752": "War","37": "Western"
    };

    return (
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
    )
}

export default MovieCard;