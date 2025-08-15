import React from "react";
import Dialog from "./Dialog";
import { useNotesContext } from "../context/NotesContetx";
import NoteCard from "./NoteCard";

const Notes = () => {
  const { showDialog, notes = [] } = useNotesContext();

  const data = notes?.[0] ?? {};

  return (
    <div className="notes">
      {showDialog ? (
        <Dialog />
      ) : (
        <NoteCard title={data?.title} content={data?.content} />
      )}
    </div>
  );
};

export default Notes;
