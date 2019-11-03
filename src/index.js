import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LandingPage from './Landing';
import FAQ from './FAQ';

ReactDOM.render(
document.URL === 'http://localhost:3000/home' ? <LandingPage /> : document.URL === 'http://localhost:3000/faq' ? <FAQ /> : <App />, document.getElementById('root')
);

