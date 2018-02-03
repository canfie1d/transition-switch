import React from 'react';
import { Route } from 'react-router';
// TransitionSwitch is recreated on every build
import { TransitionSwitch } from './transition-switch';
import Home from './Routes/Home';
import Details from './Routes/Details';

export default class Routes extends React.Component {
  render() {
    return (
      <TransitionSwitch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
      </TransitionSwitch>
    );
  }
}
