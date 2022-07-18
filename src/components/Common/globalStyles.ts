import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
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
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyle;
