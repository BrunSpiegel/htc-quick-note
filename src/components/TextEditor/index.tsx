import { Editor, EditorContent } from "@tiptap/react";
import { TextEditorContainer } from "./styles";

interface TextEditorProps {
  editor: Editor 
}

export function TextEditor({editor}: TextEditorProps) {

  return (
    <TextEditorContainer>
      <EditorContent editor={editor}/>
    </TextEditorContainer>
  )
}