import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;  
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  ul, li, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
