import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePrevious } from 'react-use';
import PropTypes from 'prop-types';

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration.
const ScrollToTop = (props) => {
  const location = useLocation();
  const prevLocation = usePrevious(location);
  let timeout;

  useLayoutEffect(() => {
    if (prevLocation && location.pathname !== prevLocation.pathname) {
      timeout = setTimeout(() => {
        props.scrollContainer.scrollTo(
          props.scrollTopOffset.x,
          props.scrollTopOffset.y
        );
      }, props.scrollTopDelay);
    }

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};

ScrollToTop.defaultProps = {
  scrollTopOffset: { x: 0, y: 0 },
  scrollTopDelay: 500,
  scrollContainer: window,
};

ScrollToTop.propTypes = {
  scrollTopOffset: PropTypes.object,
  scrollTopDelay: PropTypes.number,
  scrollContainer: PropTypes.any,
};

export default ScrollToTop;
