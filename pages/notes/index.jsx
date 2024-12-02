import { useNoteMutation } from "@/api/add-note";
import { useNotes } from "@/api/get-notes";

function Notes() {
  const { data: notesList } = useNotes();
  const { mutate: addNote } = useNoteMutation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addNote(formData);
  };

  return (
    <div className="notesContainer">
      <div>
        <p>Add a new note</p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <div className="form-group">
              <label htmlFor="id" className="form-label">
                ID
              </label>
              <input type="number" id="id" className="form-input" name="id" />
            </div>

            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="form-input"
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                id="description"
                className="form-input"
                name="description"
              />
            </div>
          </div>
          <button type="submit">Add note</button>
        </form>
      </div>
      <div>
        <p>List of notes</p>
        <div className="notesListContainer">
          {notesList?.map((note) => (
            <div key={note.id} className="note">
              <p>{note.title}</p>
              <p>{note.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Notes;
