import React from 'react'
import Header from '../../components/Header'
import Notes from '../../components/Notes';
import "./style.css";

const StickyNotes = () => {
  return (
    <div className='stickynotes'>
        <Header />
        <Notes />
    </div>
  )
}

export default StickyNotes