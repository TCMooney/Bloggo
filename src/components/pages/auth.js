import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SigninForm from '../forms/signinForm';
import authImg from '../../../static/assets/images/auth/authImg.jpg'

class Auth extends Component {

  handleSignin = (fields) => {
    this.props.signIn(fields, () => {
      this.props.history.push('/home');
    })
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/home')
    }
  }

  render() {
    return (
      <div className='auth-container'
        style={{
          backgroundImage: `url(${authImg})`
        }}>
        <div className='signin-wrapper'>
          <SigninForm onSubmit={(event) => this.handleSignin(event)} className='signin-form' />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  return auth;
}

export default connect(mapStateToProps, actions)(Auth);