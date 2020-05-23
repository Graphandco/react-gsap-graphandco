import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.20s linear;
  }

  header {

    background: ${({ theme }) => theme.headerBG};    
  }

  header a {
    color: ${({ theme }) => theme.text};
    &.active{
      color: ${({ theme }) => theme.headerLinkActive};
    } 
  }

  .card {
    background: ${({ theme }) => theme.headerBG};
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #FFFFFF !important;
  }
  `;
