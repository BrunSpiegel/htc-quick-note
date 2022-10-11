import { Note } from "../AddNote";

interface NotesListProps {
  notes: Note[];
}

export function NotesList({ notes }: NotesListProps) {
  return (
    <div>
      <ul>
        {notes.map((note) => {
          return (
            <li>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
