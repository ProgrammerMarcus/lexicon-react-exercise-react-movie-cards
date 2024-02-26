import MovieList from "./components/MovieList";
import "./App.css";
import AddMovie from "./components/AddMovie";
import Movie from "./interfaces/InterfaceMovie";
import { useState } from "react";
import Controls from "./interfaces/InterfaceControls";

export function App() {
    const storedMovies: Movie[] = [
        {
            id: "0",
            title: "John Smith: Holy Smiting",
            rating: 5,
            genre: "Fantasy",
            description: "An epic fantasy adventure featuring bla bla bla.",
        },
    ];

    const [movieList, setMovieList] = useState(storedMovies);

    const add = (movie: Movie) => {
        setMovieList((oldMovies) => [...oldMovies, movie]);
    };

    const controls: Controls = {
        sortTitle: () => {
            setMovieList((oldMovies) => {
                return [...oldMovies].sort((a, b) => a.title.localeCompare(b.title));
            });
        },
        sortRating: () => {
            setMovieList((oldMovies) => {
                return [...oldMovies].sort((a, b) => Number(a) - Number(b));
            });
        },
    };

    return (
        <>
            <div className="background"></div>
            <AddMovie submit={add}></AddMovie>
            <MovieList controls={controls} movieList={movieList}></MovieList>
        </>
    );
}
