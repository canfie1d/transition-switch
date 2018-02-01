import React from "react";

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
