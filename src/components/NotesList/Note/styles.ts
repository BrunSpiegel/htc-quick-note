import { rem } from "polished";
import styled from "styled-components";

export const NoteContainer = styled.div`
  width: ${rem(270)};

  border: solid 1px ${({ theme }) => theme.colors.grey300};
  border-radius: 5px;
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
`