import { rem } from "polished";
import styled from "styled-components";

type ContainerProps = {
  itsOpen?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 25rem;
  width: 100%;
  max-width: ${rem(592)};
  max-height: ${({ itsOpen }) => (itsOpen ? "calc(100vh - 16rem)" : rem(52))};

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  overflow: hidden;

  transition: max-height 0.2s;

  form {
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 1;
  }

  .backdrop {
    position: fixed;
    top: 0%;
    left: 0%;

    visibility: ${({ itsOpen }) => (itsOpen ? "visible" : "hidden")};

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  input {
    height: ${rem(52)};
    width: 100%;
    border: transparent;
    padding-inline: 1rem;
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
