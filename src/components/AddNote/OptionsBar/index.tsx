import { Editor } from "@tiptap/react";
import UndoIcon from "../../../assets/icons/ic_undo.svg";
import RedoIcon from "../../../assets/icons/ic_redo.svg";
import BoldIcon from "../../../assets/icons/ic_text-bold.svg";
import ItalicIcon from "../../../assets/icons/ic_text-italic.svg";
import StrikeIcon from "../../../assets/icons/ic_text-strikethrough.svg";
import BulletlistIcon from "../../../assets/icons/ic_list-bulleted.svg";
import UnderlineIcon from "../../../assets/icons/ic_text-underline.svg";
import ImageIcon from "../../../assets/icons/ic_image.svg";
import { Container, OptionButton } from "./styles";

interface OptionsBarProps {
  editor: Editor;
  children: React.ReactNode;
  onFileAddition: (file: File) => void
}

export function OptionsBar({ editor, children, onFileAddition }: OptionsBarProps) {

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) onFileAddition(file);
  }

  return (
    <Container>
      <OptionButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        type="button"
      >
        <UndoIcon />
      </OptionButton>
      <OptionButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        type="button"
      >
        <RedoIcon />
      </OptionButton>
      <OptionButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        type="button"
      >
        <BoldIcon />
      </OptionButton>
      <OptionButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        type="button"
      >
        <ItalicIcon />
      </OptionButton>
      <OptionButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        type="button"
      >
        <UnderlineIcon />
      </OptionButton>
      <OptionButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        type="button"
      >
        <StrikeIcon />
      </OptionButton>
      <OptionButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        type="button"
      >
        <BulletlistIcon />
      </OptionButton>
      <OptionButton type="button">
        <label htmlFor="image">

        <ImageIcon />
        </label>
        <input type="file" id="image" accept="image/*" onChange={handleImageInputChange}/>
      </OptionButton>
      <div>{children}</div>
    </Container>
  );
}
