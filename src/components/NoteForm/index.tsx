import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { api } from "../../services/api";
import { INote, RawNote } from "../../types/Global";
import { isTextJson } from "../../Utils/isTextjson";
import { OptionsBar } from "../AddNote/OptionsBar";
import { TextEditor } from "../TextEditor";
import { Form, SubmitButton } from "./styles";

interface NoteFormProps {
  note?: INote;
  resetOnSubmit?: boolean;
  onSubmit: (note: RawNote) => void;
}

export function NoteForm({ onSubmit, note, resetOnSubmit }: NoteFormProps) {
  const [title, setTitle] = useState(note?.title ?? " ");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Placeholder.configure({
        placeholder: "Criar uma anotação ou lista",
      }),
    ],
    content: note
      ? isTextJson(note.text)
        ? JSON.parse(note.text)
        : note.text
      : "",
  });

  const handleFileAddition = (file: File) => {
    const formData = new FormData();

    formData.append("image", file);

    api.post("/upload", formData).then((response) => {
      const { data } = response;

      editor?.chain().focus().setImage({ src: data.url }).run();
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const note: RawNote = {
      title: title,
      text: editor ? JSON.stringify(editor.getJSON()) : "",
    };

    onSubmit(note);

    if(!resetOnSubmit) return

    setTitle("");
    editor?.commands.setContent("");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
}
