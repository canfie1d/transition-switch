import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { SwitchTransition, Transition } from 'react-transition-group';
import * as Animated from 'animated/lib/targets/react-dom';
import ScrollToTop from './ScrollToTop';
import PropTypes from 'prop-types';

const TransitionSwitch = (props) => {
  const [animate] = useState(new Animated.Value(0));
  const [location, setLocation] = useState(props.location);
  const pathname = props.location.pathname;
  const currentKey = pathname.split('/')[1] || '/';

  useEffect(() => {
    setLocation(props.location);
  }, [pathname]);

  const handleEnter = () => {
    setTimeout(() => {
      Animated.spring(animate, { toValue: 1 }).start();
    }, props.timeout.enter);
  };

  const handleExit = () => {
    Animated.spring(animate, { toValue: 0 }).start();

    setTimeout(() => {
      setLocation(props.location);
    }, props.timeout.exit);
  };

  const interpolation = animate.interpolate({
    inputRange: [0, 1],
    outputRange: ['12px', '0px'],
  });

  let style = {};
  switch (props.transition) {
    case 'fade-down':
      style = {
        opacity: Animated.template`${animate}`,
        transform: Animated.template`translate3d(0, ${interpolation}, 0)`,
      };
      break;
    case 'fade-up':
      style = {
        opacity: Animated.template`${animate}`,
        transform: Animated.template`translate3d(0, -${interpolation}, 0)`,
      };
      break;
    case 'fade':
      style = {
        opacity: Animated.template`${animate}`,
      };
      break;
    default:
      style = props.transition;
  }

  return (
    <>
      {props.scrollToTop && (
        <ScrollToTop
          scrollTopDelay={props.scrollTopDelay}
          scrollTopOffset={props.scrollTopOffset}
          scrollContainer={props.scrollContainer}
        />
      )}
      <SwitchTransition mode='in-out'>
        <Transition
          key={currentKey}
          timeout={props.timeout}
          onEnter={handleEnter}
          onExit={handleExit}
          appear
        >
          <Animated.div className={props.animatedDivClassName} style={style}>
            <Switch location={location}>{props.children}</Switch>
          </Animated.div>
        </Transition>
      </SwitchTransition>
    </>
  );
};

TransitionSwitch.propTypes = {
  children: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  transition: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  timeout: PropTypes.object,
  scrollToTop: PropTypes.bool,
  scrollTopOffset: PropTypes.object,
  scrollTopDelay: PropTypes.number,
  scrollContainer: PropTypes.any,
  animatedDivClassName: PropTypes.string,
};

TransitionSwitch.defaultProps = {
  transition: 'fade',
  timeout: { enter: 500, exit: 500 },
  scrollToTop: true,
  animatedDivClassName: 'animatedRouteWrapper',
  transitionGroupComponent: 'main',
};

export default TransitionSwitch;
