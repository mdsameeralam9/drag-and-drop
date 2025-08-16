import useNotesContext from "../hooks/useNotesContext";


const Header = () => {
  const { setShowDialog } = useNotesContext();
  const handleShowAndHide = () => {
    setShowDialog(true);
  };

  return (
    <header className="header">
      <h2>Notes</h2>
      <button
        className="addnote"
        type="button"
        aria-label="show form component"
        onClick={handleShowAndHide}
      >
        + Add Note
      </button>
    </header>
  );
};

export default Header;
