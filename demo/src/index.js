import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './style.css';

ReactDOM.render(
  <Router basename="/">
    <Routes />
  </Router>,
  document.getElementById('root')
);
