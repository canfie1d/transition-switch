import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div style={{ background: '#4F86C6', padding: '20px' }}>
        <div style={{ height: '100vh' }}>
          <h1>Transition Switch Demo</h1>
          <p style={{ maxWidth: '700px' }}>This package replaces react-router 4‘s Switch component and enables scroll-to-top functionality and route transition animations using <a href="https://github.com/reactjs/react-transition-group">React Transition Group</a> and <a href="https://github.com/animatedjs/animated">Animate.js</a>.</p>
          <p style={{ maxWidth: '700px' }}>More Information can be found on the <NavLink to='/details'>Details Page</NavLink>.</p>
        </div>
        <NavLink to='/details'>Details Page</NavLink>
      </div>
    );
  }
}
