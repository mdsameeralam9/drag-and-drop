import { useNotesContext } from "../context/NotesContetx"

const Header = () => {
  // source - https://www.youtube.com/watch?v=fyKaKRaUmr4
  const { setShowDialog } = useNotesContext()
  return (
    <header className='header'>
        <h2>Notes</h2>
        <button className='addnote' type='button' aria-label='add notes' onClick={() => setShowDialog(true)}>+ Add Note</button>
    </header>
  )
}

export default Header