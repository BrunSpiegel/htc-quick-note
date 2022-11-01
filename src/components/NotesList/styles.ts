import { rem } from "polished";
import styled from "styled-components";

export const NotesListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  max-width: ${rem(1360)};
  display: grid;
  row-gap: ${rem(25)};
  column-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
`;
