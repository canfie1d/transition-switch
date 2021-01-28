import { NavLink } from 'react-router-dom';

const Details = () => {
  return (
    <div className='content'>
      <NavLink className='link' exact to='/'>
        Home
      </NavLink>
      <h1 className='h1'>Transition Switch</h1>
      <div className='switch-wrapper'>
        <div className='switch switch--left' />
        <div className='switch switch--right' />
      </div>
      <h2 className='h2'>Installation</h2>
      <code className='code'>
        <pre>{'yarn add transition-switch'}</pre>
      </code>
      <h2 className='h2'>Usage</h2>
      <code className='code'>
        <pre>{`import { TransitionSwitch } from 'transition-switch';`}</pre>
      </code>
      <br />
      <code className='code'>
        <pre>
          {`<TransitionSwitch>
  <Route />
  <Route />
</TransitionSwitch>`}
        </pre>
      </code>
      <p className='p'>
        You can also use the ScrollToTop component independently which will
        initiate a scroll on any route change (requires location prop from
        react-router).
      </p>
      <code className='code'>
        <pre>{`import { ScrollToTop } from 'transition-switch';
import { useLocation } from 'react-router-dom';`}</pre>
      </code>
      <br />
      <code className='code'>
        <pre>{`const location = useLocation();

<ScrollToTop location={location} />`}</pre>
      </code>
      <NavLink className='link' exact to='/'>
        Home
      </NavLink>
    </div>
  );
};

export default Details;
