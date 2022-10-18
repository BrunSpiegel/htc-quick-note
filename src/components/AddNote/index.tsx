import { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { api } from "../../services/api";
import { Container } from "./styles";

export type Note = {
  title: string;
  text: string;
};

interface AddNoteProps {
  onAddNote: (note: Note) => void;
}

export function AddNote({ onAddNote }: AddNoteProps) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const note = {
      title: title,
      text: text,
    };

    api
      .post("/notes", note)
      .then(() => {
        onAddNote(note);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpenAddNote = () => {
    setIsAddNoteOpen(true)
  }

  const handleCloseAddNote = () => {
    setIsAddNoteOpen(false)
  }

  return (
    <Container itsOpen={isAddNoteOpen}> 
    <div className="backdrop" onClick={handleCloseAddNote}></div>
      <form onSubmit={handleSubmit} onClick={handleOpenAddNote}>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <FiCheckSquare />
        </div>
        <div>
          <textarea
            name="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </Container>
  );
}
