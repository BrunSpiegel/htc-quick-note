import { useEffect, useState } from "react";
import { AddNote, Note } from "../../components/AddNote";
import { NotesList } from "../../components/NotesList";
import { api } from "../../services/api";
import { Container } from "./styles"

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
    <Container>
      <AddNote onAddNote={handleAddNote} />
      <NotesList notes={notes} />
    </Container>
  );
}

export { Home };
