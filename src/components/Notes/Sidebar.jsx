const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified); // To sort notes according to lastModified

  return (
    <div className="notes-sidebar">
      <div className="notes-sidebar-header">
        <h1>Notes</h1>
        <button className="notes-button" onClick={onAddNote}>
          Add
        </button>
      </div>
      <div className="notes-sidebar-notes">
        {/* Loop through all notes and list them  */}
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`notes-sidebar-note ${id === activeNote && "active"}`} // to highlight only the active
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button
                className="notes-button"
                onClick={(e) => onDeleteNote(id)} // id required to delete a particular note
              >
                Delete
              </button>
            </div>

            {/* Note preview, Conditional rendering */}
            <p>{body && body.substr(0, 100) + "..."}</p>

            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
