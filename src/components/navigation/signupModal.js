import React, { useContext, useState } from 'react';

import ReactModal from 'react-modal';
import { AuthContext } from '../contexts/AuthState';
import { ModalContext } from '../contexts/ModalState';

export default function SignupModal(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setConfirmPassword] = useState('');

  const { modalIsOpen, closeModal } = useContext(ModalContext);
  const { signUp } = useContext(AuthContext);

  const onSubmit = event => {
    event.preventDefault();

    const newUser = {
      name,
      email,
      password,
      password2
    }

    const success = () => {
      closeModal();
      () => history.push('/home');
    }

    signUp(newUser, () => success())
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '350px',
      height: '300px'
    },
    overlay: {
      backgroundColor: 'rgba(1, 1, 1, 0.75)'
    }

  }

  return (
    <div>
      <ReactModal
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => {
          closeModal();
        }}
        isOpen={modalIsOpen}>
        <div className='sign-up-wrapper'>
          <form onSubmit={onSubmit} className='sign-up-form'>

            <input className='sign-up-name' type='text' value={name} onChange={(event) => setName(event.target.value)} placeholder='Name' />

            <input className='sign-up-email' type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email' />

            <input className='sign-up-password' type='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' />
            <input className='sign-up-confirm-password' type='password' value={password2} onChange={(event) => setConfirmPassword(event.target.value)} placeholder='Confirm Password' />
            <button className='sign-up-button'>Sign Up</button>
          </form>
        </div>
      </ReactModal>
    </div >
  )
}
