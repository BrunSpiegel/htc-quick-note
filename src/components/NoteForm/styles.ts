import { rem } from "polished";
import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;

  input {
    height: ${rem(52)};
    width: 100%;
    border: transparent;
    padding-inline: 1rem;

    ::placeholder {
      color: ${({ theme }) => theme.colors.grey500};
    }
  }
  `;
  
  export const SubmitButton = styled.button`
  height: ${rem(36)};
  padding-inline: 1rem;
  font-size: ${rem(14)};
  border-radius: 5px;

  :hover:not(:active) {
    background-color: ${({ theme }) => theme.colors.grey100};
  }
`;
