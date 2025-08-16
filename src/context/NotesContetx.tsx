import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

interface NotesContextProps {
  children: ReactNode;
}

export interface NoteInterface {
  title: string;
  content: string;
}

// Define the shape of the context value
interface ContextType {
  notes: (NoteInterface | null)[];
  setNotes: React.Dispatch<React.SetStateAction<(NoteInterface | null)[]>>;
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Provide a default value for the context with correct typing
const ContextProvider = createContext<ContextType | undefined>(undefined);

// Custom hook to use the context with type safety
export const useNotesContext = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error(
      "useNotesContext must be used within a NotesContext provider"
    );
  }
  return context;
};

const NotesContext: FC<NotesContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  const [notes, setNotes] = useState<(NoteInterface | null)[]>([]);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [notesAllData, setNotesAllData] = useState({
    yetToStart: [{ title: "yetToStart Note", content: "Sample Content" }],
    progress: [{ title: "progress Note", content: "Sample Content" }],
    completed: [{ title: "completed Note", content: "Sample Content" }],
  });

  const [currentDragingItem, setCurrentDragingItem] = useState<NoteInterface | null>(null);

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
