import React, { Component } from 'react';


class ErrorBoundry extends Component {
  // this is to allow access to this.props in the constructor
  constructor(props) {
    super(props);
    this.state = {
      hasError: false 
    }
  }

componentDidCatch(error, info) {
  this.setState({ hasError: true })
}

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That's not good</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry;