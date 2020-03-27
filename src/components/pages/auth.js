import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SigninForm from '../forms/signinForm';
import SignupForm from '../forms/signupForm';
import authImg from '../../../static/assets/images/auth/authImg.jpg'

class Auth extends Component {
  constructor(props) {
    super(props);


  }

  handleSignin = (fields) => {
    this.props.signIn(fields, () => {
      this.props.history.push('/home');
    })
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

export default connect(null, actions)(Auth);