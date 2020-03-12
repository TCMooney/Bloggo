import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Logout extends Component {
  render() {
    return (
      <NavLink onClick={this.props.logout} to='/'>Logout</NavLink>
    )
  }
}

export default connect(null, actions)(Logout);