import { useEffect, useRef, useState } from "react";

export function useMovies({searchMovie}){
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    let debounceTime = useRef(null);

    useEffect(() => {
        clearTimeout(debounceTime.current);
        
        function getMovies(){
            setError('loading-movies');

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
                    setError(`HTTP error! Status: ${res.status}`);
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                setError('');
                return res.json();
            })
            .then((data) => {
                if(data.results.length < 1){
                    setError('invalid-movie');
                }
                setMovies(data.results);
            })
            .catch((err) => console.error(err));
        }

        if(searchMovie !== undefined && searchMovie.length > 0){
            debounceTime.current = setTimeout(() => {
            getMovies();  
            }, 1000);
        }else{
            setMovies([]);
            setError("no-movies");
        }

    }, [searchMovie]);

    return { movies, error };

}