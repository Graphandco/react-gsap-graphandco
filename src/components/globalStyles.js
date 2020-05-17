import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.headerBG};    
    transition: all 0.50s linear;
  }

  header a {
    margin: 0 28px;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-size: 12px;
    font-weight: 600;
    font-family: 'Poppins';
  }
  `;
