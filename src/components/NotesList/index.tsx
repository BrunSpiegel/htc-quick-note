import { INote } from "../../types/Global";
import { Note } from "./Note";
import { NotesListContainer, List } from "./styles";

interface NotesListProps {
  onNoteEdit: () => void;
  notes: INote[];
}

export function NotesList({ notes, onNoteEdit }: NotesListProps) {
  return (
    <NotesListContainer>
      <List>
        {notes.map((note) => {
          return <Note note={note} onNoteEdit={onNoteEdit} />;
        })}
      </List>
    </NotesListContainer>
  );
}
