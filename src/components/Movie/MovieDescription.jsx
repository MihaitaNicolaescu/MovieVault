function MovieDescription({data}){
    const genres = {
        "28": "Action","12": "Adventure","16": "Animation","35": "Comedy","80": "Crime","99": "Documentary",
        "18": "Drama","10751": "Family","14": "Fantasy","36": "History","27": "Horror","10402": "Music",
        "9648": "Mystery","10749": "Romance","878": "Science Fiction","10770": "TV Movie",
        "53": "Thriller","10752": "War","37": "Western"
    };
    
    return(
        <div className="grid grid-flow-row font-semibold text-gray-300 text-[12px] text-left ml-10 mr-10 mt-4">
            <p className="italic mt-2">{data.overview}</p>
            <p className="mt-2">{Array.isArray(data.genre_ids) && data.genre_ids.length > 0 ? data.genre_ids.map(id => genres[id]).join(', ') : 'No genres available'}</p>
        </div>
    );
}

export default MovieDescription;