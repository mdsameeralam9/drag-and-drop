import React, { useState } from "react";
import { NoteInterface, useNotesContext } from "../context/NotesContetx";

const Dialog = () => {
  const { setShowDialog, setNotes } = useNotesContext();
  const [formStata, setFormState] = useState<NoteInterface>({
    title: "",
    content: "",
  })

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotes((prevNotes) => [...prevNotes, formStata])
    setShowDialog(false);
    console.log(formStata);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formStata,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="dialog">
      <div className="dialog-content">
        <h2>Add new note</h2>
        <input type="text" placeholder="Note Title" name="title" onChange={handleChange}/>
        <textarea placeholder="Note Content" name="content" onChange={handleChange}/>
        <div className="dialog-action">
          <button
            className="btn btn-secondary"
            onClick={() => setShowDialog(false)}
          >
            Cancel
          </button>
          <button aria-label="add note" type="button" className="btn btn-primary" onClick={handleAddNote}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
