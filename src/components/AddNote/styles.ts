import styled from "styled-components"

type ContainerProps = {
  itsOpen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 25rem;
  background-color: rebeccapurple;

  background-color: ${(props) => props.color};

  form {
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary500};

    z-index: 1;
  }

  .backdrop {
    position: fixed;
    top: 0%;
    left: 0%;

    visibility: ${({ itsOpen}) => (itsOpen ? "visible" : "hidden")};

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`