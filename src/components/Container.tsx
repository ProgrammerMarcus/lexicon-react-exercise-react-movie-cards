import ToDo from "./Movie";
import "./Container.css";
import Note from "../interfaces/InterfaceMovie";
import InterfaceControls from "../interfaces/InterfaceControls";

interface ContainerProps {
    controls: InterfaceControls;
    noteList: Note[];
}

export function Container({ controls, noteList }: ContainerProps) {
    return (
        <>
            <div className="container">
                <p className="sorting">
                    Sort by:{" "}
                    <span onClick={controls.sortDate} className="date sort">
                        date
                    </span>
                    {" or "}
                    <span onClick={controls.sortAuthor} className="author sort">
                        author
                    </span>
                </p>
                {noteList.map((note: Note) => (
                    <ToDo controls={controls} key={note.id} note={note}></ToDo>
                ))}
            </div>
        </>
    );
}

export default Container;
