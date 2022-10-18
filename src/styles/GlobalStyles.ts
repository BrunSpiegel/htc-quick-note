import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  html {
    @media (max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;  
    font-size: 1rem;
  }

  body {
    font-family: "Barlow", sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input, textarea {
     outline: transparent;
  }

  textarea {
    resize: none;
    font-family: inherit;
  }
`