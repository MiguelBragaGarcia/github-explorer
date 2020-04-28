import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
const App = () => (
    <>
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
        <GlobalStyle></GlobalStyle>
    </>
);

export default App;
