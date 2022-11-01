import { Editor, EditorContent } from "@tiptap/react";
import { Container } from "./styles";

interface TextEditorProps {
  editor: Editor 
}

export function TextEditor({editor}: TextEditorProps) {

  return (
    <Container>
      <EditorContent editor={editor}/>
    </Container>
  )
}