import { useRef } from 'react';
import { Route } from 'react-router-dom';
import { TransitionSwitch } from './transition-switch';
import Home from './Routes/Home';
import Details from './Routes/Details';

const Routes = (props) => {
  const nodeRef = useRef(null);
  return (
    <TransitionSwitch ref={nodeRef}>
      <Route exact path='/' component={Home} />
      <Route exact path='/details' component={Details} />
    </TransitionSwitch>
  );
};

export default Routes;
