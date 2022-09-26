import React from 'react';
import ReactDOM from 'react-dom/client';

import './default.css';
//import InitialPage from './InitialPage';

import PrivateContent from './PrivateContent';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <PrivateContent />
  </React.StrictMode>
);