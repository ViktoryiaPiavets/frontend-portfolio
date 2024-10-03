import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }    
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.light};
  }

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme.palette.secondary.main};
}
 
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.palette.primary.contrastText};
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.palette.primary.light};
  cursor: pointer;
}

#header {
  display: flex;
  justify-content: center;
}
`;

export default GlobalStyle;
