import React from 'react';
import PropTypes from 'prop-types';

export default class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const scrollContainer = this.props.scrollContainer;

    if (this.props.location !== prevProps.location) {
      setTimeout(() => {
        scrollContainer.scrollTo(this.props.scrollTopOffset.x, this.props.scrollTopOffset.y);
      }, this.props.scrollTopDelay);
    }
  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    return null;
  }
}

ScrollToTop.defaultProps = {
  scrollTopOffset: { x: 0, y: 0 },
  scrollTopDelay: 250,
  scrollContainer: window,
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  scrollTopOffset: PropTypes.object,
  scrollTopDelay: PropTypes.number,
  scrollContainer: PropTypes.any
}

