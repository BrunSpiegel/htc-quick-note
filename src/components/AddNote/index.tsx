import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useState } from "react";
import { api } from "../../services/api";
import { Container, SubmitButton } from "./styles";
import { TextEditor } from "./TextEditor";
import { OptionsBar } from "./OptionsBar";
import Underline from "@tiptap/extension-underline";
import image from "@tiptap/extension-image";

export type Note = {
  title: string;
  text: string;
};

interface AddNoteProps {
  onAddNote: (note: Note) => void;
}

export function AddNote({ onAddNote }: AddNoteProps) {
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      image,
      Placeholder.configure({
        placeholder: "Criar uma anotação ou lista",
      }),
    ],
  });

  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const note = {
      title: title,
      text: editor ? JSON.stringify(editor.getJSON()) : "",
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
    setIsAddNoteOpen(true);
  };

  const handleCloseAddNote = () => {
    setIsAddNoteOpen(false);
  };

  const handleFileAddition = (file: File) => {
    const formData = new FormData();

    formData.append("image", file);

    api.post("/upload", formData).then((response) => {
      const { data } = response;

      editor?.chain().focus().setImage({ src: data.url }).run();
    });
  };

  return (
    <Container itsOpen={isAddNoteOpen}>
      <div className="backdrop" onClick={handleCloseAddNote}></div>
      <form onSubmit={handleSubmit} onClick={handleOpenAddNote}>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Crie sua anotação ou lista..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          {editor && <TextEditor editor={editor} />}
          {editor && (
            <OptionsBar editor={editor} onFileAddition={handleFileAddition}>
              <SubmitButton type="submit">Save</SubmitButton>
            </OptionsBar>
          )}
        </div>
      </form>
    </Container>
  );
}
