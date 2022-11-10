import styled, { css } from "styled-components";

interface ModalContainerProps {
  isOpen: Boolean;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  transition: all .2s;
  z-index: 2;
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  position: relative;

  background-color: ${({theme}) => theme.colors.background};

  border-radius: 10px;

  z-index: 2;
  `
