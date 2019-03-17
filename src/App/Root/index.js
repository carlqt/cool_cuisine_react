import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Root extends Component {
  render() {
    return (
      <Redirect to="/menu" />
    );
  }
}

export default Root;

