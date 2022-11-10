import { useState } from "react";
import { INote } from "../../../types/Global";
import { Modal } from "../../shared/Modal";
import { NoteBody } from "./NoteBody";
import { NoteContainer, NoteContent, NoteTitle } from "./styles";

interface NoteProps {
  note: INote;
}

export function Note({ note }: NoteProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <NoteContainer>
      <NoteContent onClick={openModal}>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteBody content={note.text} />
      </NoteContent>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <span>
          <h4>{note.id}</h4>
        </span>
        <span>{note.title}</span>
      </Modal>
    </NoteContainer>
  );
}
