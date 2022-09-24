import React from 'react';
import ReactDOM from 'react-dom/client';

import './default.css';
import InitialPage from './InitialPage';
import Container from './PrivateContent/Container';
import Header from './PrivateContent/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Container>
      <Header />
    </Container>
  </React.StrictMode>
);