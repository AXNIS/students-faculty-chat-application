import { useEffect, useState } from "react";
import uuid from "react-uuid";

import Main from "./Main";
import Sidebar from "./Sidebar";

import "../../styles/Notes.css";

function Notes() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : [] // JSON.parse: constructing the JavaScript value or object described by the string
  );
  const [activeNote, setActiveNote] = useState(false);

  // going to store it in local storage every time it changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes)); // JSON.stringify: converts a JavaScript object or value to a JSON string
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(), // external library to create random id every-time
      title: "Untitled Note", // Default title
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]); // Current notes object -> putting them into new note
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId)); // filter and delete the other notes of respective ids
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote; // Replace this iteration in the array with the updated note
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  // to return only the clicked active note
  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="notes">
      <Sidebar
        notes={notes} // So that Sidebar also gets live access to this piece of state (notes).
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default Notes;
