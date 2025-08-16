import React from "react";
import { NoteInterface } from "../types";
import useNotesContext from "../hooks/useNotesContext";
import Draggable from "../drag_and_drop/Draggable";

interface NoteCardProps {
  item: NoteInterface;
  sectionKey: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ item, sectionKey }) => {
  const { setCurrentDragingItem } = useNotesContext();

  const handleDragStart = () => {
    setCurrentDragingItem({ dragItemKey: sectionKey, dragItem: item });
  };

  return (
    <Draggable onDragStart={handleDragStart}>
      <div className="draggble-item list">
        <div className="note">
          <h4>{item.title}</h4>
          <p className="textWrap">{item.content}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default NoteCard;
