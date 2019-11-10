// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';

// Internal Dependencies
import './index.css';
import App from './App';
import LandingPage from './Landing';
import FAQ from './FAQ';

ReactDOM.render(
    <CookiesProvider>
        {document.URL === 'http://localhost:3000/home' ? <LandingPage /> : document.URL === 'http://localhost:3000/faq' ? <FAQ /> : <App />}
    </CookiesProvider>
    , document.getElementById('root')
);

