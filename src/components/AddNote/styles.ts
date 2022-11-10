import { rem } from "polished";
import styled from "styled-components";

export const AddNoteContainer = styled.div`
  width: 100%;
  height: ${rem(52)};
  max-width: ${rem(592)};

  margin-bottom: ${rem(50)};
`;

type ContentProps = {
  itsOpen?: boolean;
};

export const Content = styled.div<ContentProps>`
  width: 25rem;
  width: 100%;
  max-width: ${rem(592)};
  max-height: ${({ itsOpen }) => (itsOpen ? "calc(100vh - 4rem)" : rem(52))};

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  overflow: hidden;

  transition: max-height 0.2s;
`;

interface BackdropProps {
  itsOpen?: boolean;
}

export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  top: 0%;
  left: 0%;

  opacity: ${({ itsOpen }) => (itsOpen ? "1" : "0")};
  visibility: ${({ itsOpen }) => (itsOpen ? "visible" : "hidden")};

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;


