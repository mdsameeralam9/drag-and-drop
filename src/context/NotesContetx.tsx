import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";
import {
  CurrentDragingItemInterface,
  NoteInterface,
  NotesAllDataInterface,
} from "../types";

interface NotesContextProps {
  children: ReactNode;
}

// Define the shape of the context value
interface ContextType {
  notes: (NoteInterface | null)[];
  setNotes: React.Dispatch<React.SetStateAction<(NoteInterface | null)[]>>;
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  notesAllData: NotesAllDataInterface;
  setNotesAllData: React.Dispatch<React.SetStateAction<NotesAllDataInterface>>;
  currentDragingItem: CurrentDragingItemInterface | null;
  setCurrentDragingItem: React.Dispatch<
    React.SetStateAction<CurrentDragingItemInterface | null>
  >;
}

// Provide a default value for the context with correct typing
export const ContextProvider = createContext<ContextType | undefined>(undefined);

const NotesContext: FC<NotesContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  const [notes, setNotes] = useState<(NoteInterface | null)[]>([]);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [notesAllData, setNotesAllData] = useState<NotesAllDataInterface>({
    yetToStart: [
      { id: 1, title: "yetToStart Note", content: "Sample Content" },
      { id: 2, title: "yetToStart Note", content: "Sample Content" },
    ],
    progress: [
      { id: 3, title: "progress Note", content: "Sample Content" },
      { id: 4, title: "progress Note", content: "Sample Content" },
    ],
    completed: [
      { id: 5, title: "completed Note", content: "Sample Content" },
      { id: 6, title: "completed Note", content: "Sample Content" },
    ],
  });

  const [currentDragingItem, setCurrentDragingItem] =
    useState<CurrentDragingItemInterface | null>(null);

  return (
    <ContextProvider.Provider
      value={{
        notes,
        setNotes,
        showDialog,
        setShowDialog,
        theme,
        setTheme,
        notesAllData,
        setNotesAllData,
        currentDragingItem,
        setCurrentDragingItem,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default NotesContext;
