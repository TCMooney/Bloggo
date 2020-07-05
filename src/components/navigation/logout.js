import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Logout extends Component {
  render() {
    return (
      <NavLink className='logout' onClick={this.props.logout} to='/'>Logout<FontAwesomeIcon icon='sign-out-alt'/> </NavLink>
    )
  }
}

export default connect(null, actions)(Logout);