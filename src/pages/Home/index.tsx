import { useEffect, useState } from "react";
import { AddNote, Note } from "../../components/AddNote";
import { NotesList } from "../../components/NotesList";
import { api } from "../../services/api";

function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleAddNote = () => {
    fetchNotes()
  };

  const fetchNotes = () => {
    api.get("/notes").then((response) => {
      setNotes(response.data);
    });
  };

  useEffect(() => {
    fetchNotes()
  }, []);

  return (
    <div>
      <AddNote onAddNote={handleAddNote} />
      <NotesList notes={notes} />
    </div>
  );
}

export { Home };
