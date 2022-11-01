import { INote } from "../../../types/Global";
import { NoteBody } from "./NoteBody";
import { NoteContainer } from "./styles";

interface NoteProps {
  note: INote
}

export function Note({ note }: NoteProps) {
  return (
    <NoteContainer>
      <h4>{note.title}</h4>
      <NoteBody content={note.text}/>
    </NoteContainer>
  );
}
