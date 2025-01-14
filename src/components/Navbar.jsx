function Navbar({movies, setSearchMovie, searchMovie}) {

    return (
    <div className='bg-[#2e343d]-500'>
        <div className='place-items-center'>
            <div id="navbar" className="grid grid-cols-3 bg-purple-800 h-16 content-center rounded-md w-1/2">
                <div>
                    <p className="block mb-2 text-2xl content-center font-extrabold text-white p-1 font-sans">movieVault 🗄️</p>
                </div>
                <div className="flex items-center justify-center">
                    <input type="text" id="search" className="rounded-lg w-full py-2 px-3 text-white bg-purple-600 placeholder:text-gray-300" placeholder="Search movie" value={searchMovie} onChange={(e) => {setSearchMovie(e.target.value)}} />
                </div>
                <div className="flex items-center justify-center">
                    {movies.length > 0 && (<p className="text-white">Found <strong>{movies.length}</strong> results</p>)}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar;