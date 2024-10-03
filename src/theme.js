import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
        main: '#0E0E0E',        
        light: '#ffffff',
        dark: '#000000',
        contrastText: '#A3A3A3'        
    },    
    secondary: {
        main: '#131313',
        light: '#262626',
        dark: '#151515'
    },
    info: {
        main: '#5de8e8'
    } 
}});