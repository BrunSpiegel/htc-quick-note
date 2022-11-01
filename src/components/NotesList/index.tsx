import { INote } from "../../types/Global";
import { Note } from "./Note";
import { NotesListContainer, List } from "./styles";

interface NotesListProps {
  notes: INote[];
}

export function NotesList({ notes }: NotesListProps) {
  return (
    <NotesListContainer>
      <List>
        {notes.map((note) => {
          return  <Note note={note} />;
          ;
        })}
      </List>
    </NotesListContainer>
  );
}
