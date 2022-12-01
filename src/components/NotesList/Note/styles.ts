import { rem } from "polished";
import styled from "styled-components";

export const NoteGradient = styled.div`
  position: absolute;
  border-radius: 0 10px 10px;

  bottom: 0;
  left: 0;
  height: ${rem(100)};
  width: 100%;

  display: flex;
  align-items: flex-end;

  opacity: 0;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: all 0.2s;
`;

export const NoteInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    padding: 1rem;
    color: ${({ theme }) => theme.colors.background};
  }

  button {
    padding: 1rem;
  }
`;

export const NoteContainer = styled.div`
  position: relative;
  width: ${rem(270)};

  border: solid 1px ${({ theme }) => theme.colors.grey300};
  border-radius: 10px;

  :hover {
    ${NoteGradient} {
      opacity: 1;
    }
  }
`;

export const NoteTitle = styled.h3`
  padding: 1rem;
  margin-bottom: ${rem(4)};
  font-weight: 500;
  font-size: 1rem;
  line-height: ${rem(24)};
`;

export const NoteContent = styled.div`
  width: 100%;
  height: 100%;

  cursor: pointer;
`;
