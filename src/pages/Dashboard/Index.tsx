import NotesSection from '../../components/NotesSection'
import DragDropContext from '../../drag_and_drop/DragDropContext';
import useNotesContext from '../../hooks/useNotesContext';

const NotesDashboard = () => {
  const { notesAllData={} } = useNotesContext();
  return (
    <DragDropContext>
    <div className='notesdashboard'>
      <NotesSection  data={notesAllData.yetToStart} sectionKey={"yetToStart"} />
      <NotesSection data={notesAllData.progress} sectionKey={"progress"} section='Progress' secClass={"progress"}/>
      <NotesSection data={notesAllData.completed} sectionKey={"completed"} section='Completed' secClass={"completed"}/>
    </div>
    </DragDropContext>
  )
}

export default NotesDashboard