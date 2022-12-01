import { rem } from "polished";
import styled from "styled-components";

export const AuthContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 40% 60%;
`;

export const Presentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  background-color: ${({ theme }) => theme.colors.primary500};

  img {
    margin-bottom: ${rem(25)};
  }

  h1 {
    text-align: center;
    font-size: ${rem(48)};
    line-height: ${rem(50)};
    color: ${({theme}) => theme.colors.background};
    font-weight: 600;
  }

  h2 {
    position: absolute;
    left: 4rem;
    top: 2rem;

    font-size: ${rem(18)};
    font-weight: 600;
    color: ${({theme}) => theme.colors.background}
  }
`;
