import React from "react";
import NoteCard from "./NoteCard";
import useNotesContext from "../hooks/useNotesContext";
import Droppable from "../drag_and_drop/Droppable";
import { NotesAllDataInterface, NoteInterface } from "../types";

interface NoteListProps {
  sectionKey: keyof NotesAllDataInterface;
  data: NoteInterface[];
}

const NotesList: React.FC<NoteListProps> = ({ sectionKey, data = [] }) => {
  const { currentDragingItem, setNotesAllData } = useNotesContext();
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if(!currentDragingItem || sectionKey === currentDragingItem.dragItemKey) return;
    setNotesAllData((all) => {
      const copy = { ...all };
      copy[sectionKey] = [...copy[sectionKey], currentDragingItem.dragItem];

      copy[currentDragingItem.dragItemKey as keyof NotesAllDataInterface] = [
        ...copy[currentDragingItem.dragItemKey as keyof NotesAllDataInterface],
      ].filter((i) => i.id !== currentDragingItem.dragItem.id);

      return copy;
    });
  };

  return (
    <Droppable onDrop={handleDrop}>
      <div className="listWrap">
        {data.map((item, index) => (
          <NoteCard item={item} sectionKey={sectionKey} key={index} />
        ))}
      </div>
    </Droppable>
  );
};

export default NotesList;
