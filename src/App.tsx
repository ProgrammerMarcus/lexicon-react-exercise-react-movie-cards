import Container from "./components/Container";
import "./App.css";
import Form from "./components/Form";
import Note from "./interfaces/Note";
import { useState } from "react";
import Controls from "./interfaces/InterfaceControls";

export function App() {
    const storedNotes: Note[] = [
        {
            id: "0",
            name: "John Smith",
            date: "2024-02-10",
            task: "Spy things",
            done: false,
        },
        {
            id: "153",
            name: "Hat Guy",
            date: "2024-02-18",
            task: "Get some hats",
            done: true,
        },
        {
            id: "53541",
            name: "username123",
            date: "2025-02-13",
            task: "Figure out a better name",
            done: false,
        },
        {
            id: "12313",
            name: "nameless",
            date: "2024-02-05",
            task: "unknown",
            done: false,
        },
        {
            id: "12321",
            name: "T. Rex",
            date: "-66000000-02-01",
            task: "Rawr Rwar Rawr!",
            done: false,
        },
    ];

    const [noteList, setNoteList] = useState(storedNotes);

    const add = (note: Note) => {
        setNoteList((oldNotes) => [...oldNotes, note]);
    };

    const controls: Controls = {
        remove: (id: string) => {
            setNoteList((oldNotes) => oldNotes.filter((n) => n.id !== id));
        },
        // code runs twice when in strict mode or something
        // need to make a copy of target to prevent issue
        // content of useState should not be altered directly
        // and copies should be used and returned instead
        // actually, do not alter ANY values in useState,
        // only replace with new one
        up: (id: string) => {
            setNoteList((oldNotes) => {
                const index = oldNotes.findIndex((n) => n.id === id);
                const copyNotes = [...oldNotes];
                if (index > 0) {
                    const copy = copyNotes[index - 1];
                    copyNotes[index - 1] = copyNotes[index];
                    copyNotes[index] = copy;
                }
                return [...copyNotes];
            });
        },
        down: (id: string) => {
            setNoteList((oldNotes) => {
                const index = oldNotes.findIndex((n) => n.id === id);
                const copyNotes = [...oldNotes];
                if (index < copyNotes.length - 1) {
                    const copy = copyNotes[index + 1];
                    copyNotes[index + 1] = copyNotes[index];
                    copyNotes[index] = copy;
                }
                return [...copyNotes];
            });
        },
        done: (id: string) => {
            setNoteList((oldNotes) => {
                const copyNotes = [...oldNotes];
                const index = copyNotes.findIndex((n) => n.id === id);
                if (index > -1) {
                    const copy = { ...copyNotes[index] };
                    copy.done = !copy.done;
                    copyNotes[index] = copy;
                }
                return [...copyNotes];
            });
        },
        sortDate: () => {
            setNoteList((oldNotes) => {
                return [...oldNotes].sort((a, b) => a.date.localeCompare(b.date));
            });
        },
        sortAuthor: () => {
            setNoteList((oldNotes) => {
                return [...oldNotes].sort((a, b) => a.name.localeCompare(b.name));
            });
        },
    };

    return (
        <>
            <div className="background"></div>
            <Form submit={add}></Form>
            <Container controls={controls} noteList={noteList}></Container>
        </>
    );
}
