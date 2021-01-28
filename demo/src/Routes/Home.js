import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='content'>
      <h1 className='h1'>Transition Switch</h1>
      <div className='switch-wrapper'>
        <div className='switch switch--left' />
        <div className='switch switch--right' />
      </div>
      <p className='p'>
        This package replaces react-router 5‘s Switch component and enables
        scroll-to-top functionality and route transition animations using{' '}
        <a href='https://github.com/reactjs/react-transition-group'>
          React Transition Group
        </a>{' '}
        and <a href='https://github.com/animatedjs/animated'>Animate.js</a>.
      </p>
      <p className='p'>
        More Information can be found on the{' '}
        <NavLink to='/#details'>Details Page</NavLink>.
      </p>
    </div>
  );
};

export default Home;
