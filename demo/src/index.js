import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/transition-switch'>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
