function MovieTile({movieData}) {
    return (
        <div id="movie-tile" className="">
            <div className="flex border-b-2 w-full border-gray-700">
                <div className="flex ml-2 mt-2">
                    <img className="h-20 mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rnmR_ZmUCm15NG4EigLphriD4-zklT4Vv_kjZWthhn8ZnqALLBQdED_sGqay5s39cI1z" alt="movieImg"/>
                    <div className="flex flex-col text-left gap-1">
                        <p className="font-bold text-white text-sm">Need For Speed</p>
                        <p className="font-semibold text-white text-[12px]">🗓️ 2014</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieTile;