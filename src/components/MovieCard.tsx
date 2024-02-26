import "./MovieCard.css";

interface MovieCardProps {
    title: string;
    rating: number;
    genre: string;
    description: string;
}

export function MovieCard({ title, rating, genre, description }: MovieCardProps) {
    return (
        <>
            <div className="movie">
                <div className="top">
                    <span className="title">{title}</span>
                    <span className="rating">{rating + "/5"}</span>
                </div>
                <span className="genre">{genre}</span>
                <p className="description">{description}</p>
            </div>
        </>
    );
}

export default MovieCard;
