import { rem } from "polished";
import styled from "styled-components";

export const NoteContainer = styled.div`
  width: ${rem(270)};

  border: solid 1px ${({ theme }) => theme.colors.grey300};
  border-radius: 5px;
`;
