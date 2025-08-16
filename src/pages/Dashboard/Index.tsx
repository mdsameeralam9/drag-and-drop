import React from 'react'
import NotesSection from '../../components/NotesSection'
import useNotesContext from '../../hooks/useNotesContext';


const NotesDashboard = () => {
  const { notesAllData={} } = useNotesContext();
  return (
    <div className='notesdashboard'>
      <NotesSection  data={notesAllData.yetToStart} sectionKey={"yetToStart"} />
      <NotesSection data={notesAllData.progress} sectionKey={"progress"} section='Progress' secClass={"progress"}/>
      <NotesSection data={notesAllData.completed} sectionKey={"completed"} section='Completed' secClass={"completed"}/>
    </div>
  )
}

export default NotesDashboard