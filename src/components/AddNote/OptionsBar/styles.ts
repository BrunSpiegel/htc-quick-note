import { rem } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.5rem;

  div {
    margin-left: auto;
  }
`;

export const OptionButton = styled.button`
  height: ${rem(36)};
  width: ${rem(36)};

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  svg {
    path {
      fill: ${({ theme }) => theme.colors.grey800};
    }
  }

  input {
    display: none;
  }

  label {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  :hover:not(:active) {
    background-color: ${({ theme }) => theme.colors.grey100};
  }
`;
