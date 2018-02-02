import React from 'react';
import { Route } from 'react-router';
// TransitionSwitch is recreated on every build
import { TransitionSwitch } from './transition-switch';
import Home from './Routes/Home';
import NotFound from './Routes/NotFound';

export default class Routes extends React.Component {
  render() {
    return (
      <TransitionSwitch>
        <Route exact path="/" component={Home} />
        <Route exact path="/not-found" component={NotFound} />
      </TransitionSwitch>
    );
  }
}
