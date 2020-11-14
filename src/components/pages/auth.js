// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import * as actions from '../../actions';
// import SigninForm from '../forms/signinForm';
// import authImg from '../../../static/assets/images/auth/authImg.jpg'

// class Auth extends Component {

//   handleSignin = (fields) => {
//     this.props.signIn(fields, () => {
//       this.props.history.push('/home');
//     })
//   }

//   componentDidUpdate() {
//     if (this.props.isAuthenticated) {
//       this.props.history.push('/home')
//     }
//   }

//   render() {
//     return (
//       <div className='auth-container'
//         style={{
//           backgroundImage: `url(${authImg})`
//         }}>
//         <div className='signin-wrapper'>
//           <SigninForm onSubmit={(event) => this.handleSignin(event)} className='signin-form' />
//         </div>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//   const { auth } = state;
//   return auth;
// }

// export default connect(mapStateToProps, actions)(Auth);

import React, { useState, useContext } from 'react';

import { AuthContext } from '../contexts/AuthState';
import authImg from '../../../static/assets/images/auth/authImg.jpg'

export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  const onSubmit = event => {
    event.preventDefault();

    const credentials = {
      email,
      password
    }

    signIn(credentials, () => { props.history.push('/home') })
  }

  return (
    <div>
      <div className='auth-container'
        style={{
          backgroundImage: `url(${authImg})`
        }}>
        <div className='signin-wrapper'>
          <form onSubmit={onSubmit} className='login-form'>
            <input className='signin-email' type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter Email' />
            <input className='signin-password' type='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter Password' />
            <button className='login-button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}