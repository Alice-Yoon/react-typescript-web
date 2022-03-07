import { createGlobalStyle } from "styled-components";
import "reset-css";

export default createGlobalStyle`
  body {
    /* font-family: 'Noto Sans KR', sans-serif; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: white;
    box-sizing: border-box;
    margin: 0;
    letter-spacing: -0.5px;
    touch-action: pan-y;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img{
    width:100%;
  }

  ul, ol, li {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  dl, dt, dd {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;