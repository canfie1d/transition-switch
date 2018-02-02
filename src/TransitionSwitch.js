import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import * as Animated from 'animated/lib/targets/react-dom';
import ScrollToTop from './ScrollToTop';
import PropTypes from 'prop-types';

class TransitionRoutes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: new Animated.Value(0),
      location: this.props.location
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEnter() {
    setTimeout(() => {
      Animated.spring(this.state.animate, { toValue: 1 }).start();
    }, this.props.timeout.enter);
  }

  handleExit() {
    Animated.spring(this.state.animate, { toValue: 0 }).start();

    setTimeout(() => {
      this.setState({
        location: this.props.location
      });
    }, this.props.timeout.exit);
  }

  render() {
    const currentKey = this.props.location.pathname.split('/')[1] || '/';

    const interpolation = (
      this.state.animate.interpolate({
        inputRange: [0, 1],
        outputRange: ['12px', '0px']
      })
    );

    let style = {};

    switch (this.props.transition) {
      case 'fade-down':
        style = {
          opacity: Animated.template`${this.state.animate}`,
          transform: Animated.template`translate3d(0, ${interpolation}, 0)`
        };
        break;
      case 'fade-up':
        style = {
          opacity: Animated.template`${this.state.animate}`,
          transform: Animated.template`translate3d(0, -${interpolation}, 0)`
        };
        break;
      default:
        style = {
          opacity: Animated.template`${this.state.animate}`
        };
        break;
    }

    return (
      <React.Fragment>
        {this.props.scrollToTop &&
          <ScrollToTop
            location={this.props.location}
            scrollTopDelay={this.props.scrollTopDelay}
            scrollTopOffset={this.props.scrollTopOffset}
            scrollContainer={this.props.scrollContainer}
          />
        }
        <TransitionGroup component="main">
          <Transition
            key={currentKey}
            timeout={this.props.timeout}
            onEnter={this.handleEnter}
            onExit={this.handleExit}
            appear
          >
            <Animated.div className={this.props.animatedDivClassName} style={style}>
              <Switch location={this.state.location}>
                {this.props.children}
              </Switch>
            </Animated.div>
          </Transition>
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

TransitionRoutes.propTypes = {
  children: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  transition: PropTypes.string,
  timeout: PropTypes.object,
  scrollToTop: PropTypes.bool,
  scrollTopOffset: PropTypes.object,
  scrollTopDelay: PropTypes.number,
  scrollContainer: PropTypes.any,
  animatedDivClassName: PropTypes.string
}

TransitionRoutes.defaultProps = {
  transition: 'fade',
  timeout: { enter: 500, exit: 500 },
  scrollToTop: true,
  scrollTopOffset: { x: 0, y: 0 },
  scrollTopDelay: 250,
  scrollContainer: window,
  animatedDivClassName: 'animatedRouteWrapper'
}

export default withRouter(TransitionRoutes);
