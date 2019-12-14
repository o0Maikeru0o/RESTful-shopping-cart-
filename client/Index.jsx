import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './components/App.jsx';

const GlobalStyle = createGlobalStyle`
  @media only screen and (min-width:1025px) {
    body {
      width: 100%;
      height: 100%;
    }
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('app'),
);
