import React from "react";
import { useNotesContext } from "../context/NotesContetx";

const NoteCard = ({ item }) => {
  const { setCurrentDragingItem } = useNotesContext();

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setCurrentDragingItem({ ...item });
  };

  return (
    <div className="list" draggable onDragStart={handleDragStart}>
      <div className="note">
        <h4>{item.title}</h4>
        <p className="textWrap">{item.content}</p>
      </div>
    </div>
  );
};

export default NoteCard;
