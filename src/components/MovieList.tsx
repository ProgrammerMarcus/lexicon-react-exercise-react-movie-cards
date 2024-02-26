import MovieCard from "./MovieCard";
import "./MovieList.css";
import Movie from "../interfaces/InterfaceMovie";
import InterfaceControls from "../interfaces/InterfaceControls";

interface MovieListProps {
    controls: InterfaceControls;
    movieList: Movie[];
}

export function MovieList({ controls, movieList }: MovieListProps) {
    return (
        <>
            <div className="container">
                <p className="sorting">
                    Sort by:{" "}
                    <span onClick={controls.sortTitle} className="date sort">
                        title
                    </span>
                    {" or "}
                    <span onClick={controls.sortRating} className="author sort">
                        rating
                    </span>
                </p>
                {movieList.map((movie: Movie) => (
                    <MovieCard
                    key={movie.id} 
                    title={movie.title}
                    rating={movie.rating}
                    genre={movie.genre}
                    description={movie.description} />
                ))}
            </div>
        </>
    );
}

export default MovieList;
