import { useEffect } from "react";

function MovieDetails({children, setMovieDetails}) {
    useEffect(() => {
        document.addEventListener('keydown', escapePressed);

        return () => {
            document.removeEventListener('keydown', escapePressed);
        }
    }, []);

    function escapePressed(event){
        if (event.key === 'Escape') {
            setMovieDetails(null);
        }
    }

    return (
        <div className="grid grid-flow-row ">
            {children}
        </div>
    )
}

export default MovieDetails;