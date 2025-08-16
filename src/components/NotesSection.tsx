import React from 'react'
import NotesList from './NotesList'

const NotesSection = ({ section="Start", secClass="yetStrat", sectionKey="", data=[] }) => {
  console.log("data", data);
  return (
    <div className='notesSection'>
        <h3 className={secClass}>{section}</h3>
        <div className="listWrap">
          <NotesList sectionKey={sectionKey} data={data}/>
        </div>
    </div>
  )
}

export default NotesSection