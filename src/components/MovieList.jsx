import { useState } from "react";
import MovieTile from "./MovieTile";

function MovieList() {
    const [movieList, setMovieList] = useState([
      {
        "title": "Urban Odyssey",
        "genres": ["Drama", "Crime"],
        "director": "Melissa Hart",
        "cast": ["Chris Evans", "Lila Monroe", "Andre Silva"],
        "summary": "A detective navigates the gritty underworld of a city to uncover a political conspiracy.",
        "release_date": "2024-07-10",
        "score": 8.3,
        "duration": 122,
        "cover_image": "https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_SL1500_.jpg"
      },
      {
        "title": "Solar Drift",
        "genres": ["Sci-Fi", "Adventure"],
        "director": "James Carter",
        "cast": ["Zoe Saldana", "Bradley Cooper", "Elliot Page"],
        "summary": "A team of astronauts races against time to repair a solar station before a deadly flare strikes Earth.",
        "release_date": "2025-03-15",
        "score": 7.9,
        "duration": 145,
        "cover_image": "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1181_.jpg"
      },
      {
        "title": "Echoes of Yesterday",
        "genres": ["Drama", "Romance"],
        "director": "Emma Johnson",
        "cast": ["Rachel McAdams", "Ryan Gosling", "Emma Stone"],
        "summary": "Two estranged lovers reconnect in their hometown, uncovering hidden truths about their shared past.",
        "release_date": "2023-11-20",
        "score": 8.1,
        "duration": 118,
        "cover_image": "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SL1200_.jpg"
      }
    ]);

    return (
        <div id="movie-list">
            {
                movieList.map(movie => (
                    <MovieTile data={movie}/>
                ))
            }
        </div>
    )
}

export default MovieList;