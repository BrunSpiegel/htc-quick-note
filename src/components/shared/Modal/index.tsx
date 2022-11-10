import { ReactNode } from "react";
import { Backdrop, ModalContainer, ModalContent } from "./styles";

interface ModalProps {
  children: ReactNode;
  isOpen: Boolean;
  onRequestClose: () => void;
}

export function Modal({ children, isOpen, onRequestClose }: ModalProps) {
  return (
    <ModalContainer isOpen={isOpen}>
      <Backdrop onClick={onRequestClose}/>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
}
