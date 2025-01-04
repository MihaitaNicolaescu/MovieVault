import { useState } from "react";
import MovieTile from "./MovieTile";

function MovieList() {
    const [movieList, setMovieList] = useState([
          {
            "title": "The Quantum Paradox",
            "genres": ["Sci-Fi", "Thriller"],
            "director": "Sophia Carter",
            "cast": ["John Doe", "Emily Rivers", "Michael Zhang"],
            "summary": "A team of scientists accidentally creates a wormhole, leading to unforeseen consequences.",
            "release_date": "2024-03-15",
            "cover_image": "https://via.placeholder.com/300x450.png?text=The+Quantum+Paradox"
          },
          {
            "title": "Eclipse of Shadows",
            "genres": ["Fantasy", "Adventure"],
            "director": "Ryan Phillips",
            "cast": ["Anna Lee", "Jacob Turner", "Samantha Cruz"],
            "summary": "A young warrior discovers an ancient prophecy that could save her kingdom from eternal darkness.",
            "release_date": "2024-05-20",
            "cover_image": "https://via.placeholder.com/300x450.png?text=Eclipse+of+Shadows"
          },
          {
            "title": "Urban Odyssey",
            "genres": ["Drama", "Crime"],
            "director": "Melissa Hart",
            "cast": ["Chris Evans", "Lila Monroe", "Andre Silva"],
            "summary": "A detective navigates the gritty underworld of a city to uncover a political conspiracy.",
            "release_date": "2024-07-10",
            "cover_image": "https://via.placeholder.com/300x450.png?text=Urban+Odyssey"
          },
          {
            "title": "Urban Odyssey",
            "genres": ["Drama", "Crime"],
            "director": "Melissa Hart",
            "cast": ["Chris Evans", "Lila Monroe", "Andre Silva"],
            "summary": "A detective navigates the gritty underworld of a city to uncover a political conspiracy.",
            "release_date": "2024-07-10",
            "cover_image": "https://via.placeholder.com/300x450.png?text=Urban+Odyssey"
          },
          {
            "title": "Urban Odyssey",
            "genres": ["Drama", "Crime"],
            "director": "Melissa Hart",
            "cast": ["Chris Evans", "Lila Monroe", "Andre Silva"],
            "summary": "A detective navigates the gritty underworld of a city to uncover a political conspiracy.",
            "release_date": "2024-07-10",
            "cover_image": "https://via.placeholder.com/300x450.png?text=Urban+Odyssey"
          }
      ]);

    return (
        <div id="movie-list">
            {
                movieList.map(movie => (
                    <MovieTile movieData={movie}/>
                ))
            }
        </div>
    )
}

export default MovieList;