import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './containers/Home';
import { Footer } from './containers/Footer';
import { Works } from './containers/Works';
import { About } from './containers/About';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from "styled-components";
import { theme } from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Home />
                <About />
                <Works />
                <Footer />
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
