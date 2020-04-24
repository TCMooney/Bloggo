import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../history';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        history.push('/');
      }
    }
    componentDidUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        history.push('/');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }
  function mapStateToProps(state) {
    const { isAuthenticated } = state.auth;
    return { isAuthenticated };
  }
  return connect(mapStateToProps)(Authentication)
}