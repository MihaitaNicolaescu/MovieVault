import { useEffect, useState } from "react";

function Navbar({setMovies, movies}) {
    const [searchMovie, setSearchMovie] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            getMovies();
        }, 2000); // 2 secunde

        return () => {
            clearTimeout(handler); // Curăță timeout-ul dacă searchTerm se modifică din nou înainte de 2 secunde
        };
    }, [searchMovie]);

    function getMovies(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTcyN2NlZGY0NDQzYmJjZmFlMGE5YzA2MWYxYmZiZiIsIm5iZiI6MTczNjM2MDI4Ny4xNDgsInN1YiI6IjY3N2VjMTVmMzg4MWM3OTQxOWJiMWM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yP-6_YrmUlQBmkEY8LADdDZkOmnTYcp3aPPUZBneiQE'
            }
          };
          
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`, options)
        .then((res) => {
            if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            setMovies(data.results);
        })
        .catch((err) => console.error(err));
    }


    return (
        <div id="navbar" className="grid grid-cols-3 bg-purple-800 h-16 content-center rounded-md w-1/2">
            <div>
                <p className="block mb-2 text-2xl content-center font-extrabold text-white p-1 font-sans">movieVault 🗄️</p>
            </div>
            <div className="flex items-center justify-center">
                <input type="text" id="search" className="rounded-lg w-full py-2 px-3 text-white bg-purple-600 placeholder:text-gray-300" placeholder="Search movie" value={searchMovie} onChange={(e) => {setSearchMovie(e.target.value)}} />
            </div>
            <div className="flex items-center justify-center">
                {
                    movies.length > 0 && (<p className="text-white">Found <strong>{movies.length}</strong> results</p>)
                }
                
            </div>
        </div>
    )
}

export default Navbar;