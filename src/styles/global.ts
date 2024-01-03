import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}; */
  }

  body {
    background-color: ${(props) => props.theme.color.base.background};
    color: ${(props) => props.theme.color.base.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button, textarea, input {
    cursor: pointer;
  }
`
