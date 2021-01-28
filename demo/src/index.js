import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/' hashType='noslash'>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
