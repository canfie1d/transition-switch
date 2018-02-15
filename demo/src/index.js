import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.render(
  <Router basename="/">
    <Routes />
  </Router>,
  document.getElementById('root')
);
