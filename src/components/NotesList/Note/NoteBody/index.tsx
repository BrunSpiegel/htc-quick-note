import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import {useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { isTextJson } from "../../../../Utils/isTextjson";
import { TextEditor } from "../../../TextEditor";

interface NoteBodyProps {
  content: string;
}

export function NoteBody({ content }: NoteBodyProps) {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Image],
    editable: false,
    content: isTextJson(content) ? JSON.parse(content) : content, 
  });

  if (!editor) return null;

  return (
    <div>
      <TextEditor editor={editor} />
    </div>
  );
}
