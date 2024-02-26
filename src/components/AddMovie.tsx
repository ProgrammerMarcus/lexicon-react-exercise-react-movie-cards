import "./Form.css";
import { FormEvent } from "react";
import { useState } from "react";
import Movie from "../interfaces/InterfaceMovie";

interface AddMovieProps {
    submit: (movie: Movie) => void;
}

export function AddMovie({ submit }: AddMovieProps) {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const time = new Date();
        submit({
            id: String(time.getTime()) + Math.random(),
            title: title,
            rating: rating,
            genre: genre,
            description: description,
        });
    };

    return (
        <>
            <form className="form" onSubmit={submitHandler}>
                <label htmlFor="form-name" className="label">
                    Title
                </label>
                <input
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    required
                    type="text"
                    name="form-name"
                    id="form-name"
                    className="input"
                />
                <label htmlFor="form-rating" className="label">
                    Rating
                </label>
                <input
                    required
                    onChange={(event) => {
                        setRating(event.target.value);
                    }}
                    type="range"
                    name="form-rating"
                    id="form-rating"
                    className="rating"
                    min={1}
                    max={5}
                />
                <label htmlFor="form-genre" className="label">
                    Genre
                </label>
                <select
                    className="genre input"
                    name="form-genre"
                    id="form-genre"
                    onChange={(event) => {
                        setGenre(event.target.value);
                    }}
                >
                    <option className="option" value="Drama">
                        Drama
                    </option>
                    <option className="option" value="Action">
                        Action
                    </option>
                    <option className="option" value="Romance">
                        Romance
                    </option>
                    <option className="option" value="Mystery">
                        Mystery
                    </option>
                    <option className="option" value="Science Fiction">
                        Science Fiction
                    </option>
                    <option className="option" value="Fantasy">
                        Fantasy
                    </option>
                </select>
                <label htmlFor="form-text" className="label">
                    Description
                </label>
                <textarea
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                    name="form-text"
                    id="form-text"
                    cols={15}
                    rows={15}
                    className="text input"
                ></textarea>
                <button type="reset" className="clear btn">
                    Clear
                </button>
                <button type="submit" className="submit btn">
                    Add
                </button>
            </form>
        </>
    );
}

export default AddMovie;
