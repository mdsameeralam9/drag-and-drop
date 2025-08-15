import React from 'react'
import Header from '../../components/Header'
import Notes from '../../components/Notes';
import "./style.css";
import NotesContext from '../../context/NotesContetx';

const StickyNotes = () => {
  return (
    <NotesContext>
    <div className='stickynotes'>
        <Header />
        <Notes />
    </div>
    </NotesContext>
  )
}

export default StickyNotes