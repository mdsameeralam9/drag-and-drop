import React from "react";
import Dialog from "./Dialog";
import { useNotesContext } from "../../context/NotesContetx";
import NoteCard from "../../components/NoteCard";

const Notes = () => {
  const { showDialog, notes = [] } = useNotesContext();

  const data = notes?.[0] ?? {};

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("dropped");
  };

  return (
    <div className="notes" onDrop={handleDrop} onDragOver={e => e.preventDefault()}>
      {showDialog ? (
        <Dialog />
      ) : (
        <NoteCard title={data?.title} content={data?.content} />
      )}
    </div>
  );
};

export default Notes;
