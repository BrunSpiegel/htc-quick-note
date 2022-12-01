import { useEffect, useState } from "react";
import { AddNote } from "../../components/AddNote";
import { NotesList } from "../../components/NotesList";
import { api } from "../../services/api";
import { INote } from "../../types/Global";
import { Container } from "./styles";

function Home() {
  const [notes, setNotes] = useState<INote[]>([]);

  const handleAddNote = () => {
    fetchNotes();
  };

  const handleNoteEdit = () => {
    fetchNotes();
  };

  const fetchNotes = () => {
    api.get("/notes").then((response) => {
      setNotes(response.data);
    });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Container>
      <AddNote onAddNote={handleAddNote} />
      <NotesList notes={notes} onNoteEdit={handleNoteEdit} />
    </Container>
  );
}

export { Home };
