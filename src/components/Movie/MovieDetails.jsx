import { useKey } from "../CustomHooks/useKey";

function MovieDetails({children, setMovieDetails}) {
    useKey("Escape", () => setMovieDetails(null));

    return (
        <div className="grid grid-flow-row ">
            {children}
        </div>
    )
}

export default MovieDetails;