import React from "react";
import NoteCard from "./NoteCard";
import { useNotesContext } from "../context/NotesContetx";

interface NoteListProps {
  sectionKey: string;
  data: [];
}

const NotesList: React.FC<NoteListProps> = ({ sectionKey = "", data = [] }) => {
  const { currentDragingItem, setNotesAllData } = useNotesContext();
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("dropped", currentDragingItem, sectionKey, (data = []));
    setNotesAllData((all) => {
      const copy = { ...all };
      copy[sectionKey] = [...copy[sectionKey], currentDragingItem];

      copy["yetToStart"] = [];

      return copy;
    });
  };

  return (
    <div
      className="listWrap"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {data.map((item, index) => (
       <NoteCard item={item} key={index} />
      ))}
    </div>
  );
};

export default NotesList;
