import { useAddNote } from "@/api/add-note";
import { useDeleteNote } from "@/api/delete-note";
import { useNotes } from "@/api/get-notes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Trash2 } from "lucide-react";
import { useRef } from "react";

function Notes() {
  const formRef = useRef(null);

  const { data: notesList } = useNotes();
  const { mutate: addNote, isPending: isAddingNote } = useAddNote();
  const { mutate: deleteNote } = useDeleteNote();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addNote(formData);

    // Reset form after updation
    formRef.current.reset();
  };

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
  };

  return (
    <div className="notesContainer">
      <div>
        <p>Add a new note</p>
        <form onSubmit={handleFormSubmit} ref={formRef}>
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
          <Button type="submit" disabled={isAddingNote}>
            {isAddingNote && <Loader2 className="animate-spin" />}
            {isAddingNote ? "Adding Note" : "Add Note"}
          </Button>
        </form>
      </div>
      <div>
        <p>List of notes</p>
        <div className="notesListContainer">
          {notesList?.map((note) => (
            <Card key={note.id} className="mb-4">
              <CardHeader>
                <CardTitle>{note.title}</CardTitle>
                <CardDescription>
                  <div>
                    <span>{note.description}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDeleteNote(note.id)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Notes;
