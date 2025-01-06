function MovieTile({data}) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      };

    return (
        <div id="movie-tile" className="hover:cursor-pointer hover:bg-gray-700">
            <div className="flex border-b-2 w-full border-gray-700">
                <div className="flex ml-2 mt-2">
                    <img className="h-20 mb-2" src={data.cover_image} alt="movieImg"/>
                    <div className="flex flex-col text-left gap-1 ml-5">
                        <p className="font-bold text-gray-300 text-[17px]">{data.title}</p>
                        <div className="grid grid-flow-col font-semibold text-gray-300 text-[14px]">
                            <p>🗓️ {formatDate(data.release_date)}</p>
                            <p className="ml-2">🌟 {data.score}</p>
                            <p className="ml-2">⌛ {data.duration} min</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieTile;