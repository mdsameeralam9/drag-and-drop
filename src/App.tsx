import Header from "./components/Header"
import NotesContext from "./context/NotesContetx"
import NotesDashboard from "./pages/Dashboard/Index"

function App() {
  return (
    <NotesContext>
        <Header  />
        <NotesDashboard />
    </NotesContext>
   
  )
}

export default App
