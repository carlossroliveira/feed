import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

::root {
  font-size: 62.5%;
}
  
:focus {
 outline: 0;
 box-shadow: 0 0 0 2px #333;
}


body, input, texarea, button {
  font-weight: 400;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
}
`
