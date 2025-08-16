import React from "react";
import { NoteInterface } from "../types";
import useNotesContext from "../hooks/useNotesContext";

interface NoteCardProps {
  item: NoteInterface
  sectionKey: string;
}

const NoteCard:React.FC<NoteCardProps> = ({ item, sectionKey }) => {
  const { setCurrentDragingItem } = useNotesContext();

  const handleDragStart = () => {
    setCurrentDragingItem({dragItemKey: sectionKey, dragItem: item});
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
