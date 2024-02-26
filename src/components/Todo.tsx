import { BaseSyntheticEvent } from "react";
import InterfaceControls from "../interfaces/InterfaceControls";
import "./Todo.css";
import Note from "../interfaces/Note";

interface ToDoProps {
    controls: InterfaceControls;
    note: Note;
}

export function ToDo({ controls, note }: ToDoProps) {
    function clickHandler(e: BaseSyntheticEvent) {
        if (e.target.classList.contains("up")) {
            controls.up(note.id);
        } else if (e.target.classList.contains("down")) {
            controls.down(note.id);
        } else if (e.target.classList.contains("done")) {
            controls.done(note.id);
        } else if (e.target.classList.contains("remove")) {
            controls.remove(note.id);
        }
    }

    return (
        <>
            <div className="todo">
                <div className="text">
                    <span className="name">{note.name}</span>
                    <textarea className="task" defaultValue={note.task} rows={1} />
                    <span className="date">{note.date}</span>
                </div>
                <div className="buttons" onClick={(e) => clickHandler(e)}>
                    <button type="button" className="btn up">
                        ↑
                    </button>
                    <button type="button" className="btn down">
                        ↓
                    </button>
                    <button type="button" className={note.done ? "btn done hue" : "btn done"}>
                        ✓
                    </button>
                    <button type="button" className="btn remove">
                        ✖
                    </button>
                </div>
            </div>
        </>
    );
}

export default ToDo;
