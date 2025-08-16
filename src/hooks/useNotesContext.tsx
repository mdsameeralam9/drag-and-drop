import { useContext } from 'react'
import { ContextProvider } from '../context/NotesContetx';

const useNotesContext = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error(
      "useNotesContext must be used within a NotesContext provider"
    );
  }
  return context;
};

export default useNotesContext