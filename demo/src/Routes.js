import { Route, useLocation } from 'react-router-dom';
import { TransitionSwitch } from './transition-switch';
import Home from './Routes/Home';
import Details from './Routes/Details';

const Routes = (props) => {
  const location = useLocation();
  return (
    <TransitionSwitch location={location} timeout={{ enter: 0, exit: 0 }}>
      <Route exact path='/' component={Home} />
      <Route exact path='/details' component={Details} />
    </TransitionSwitch>
  );
};

export default Routes;
