import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SignupForm from '../forms/signupForm';


class SignupModal extends Component {

  handleSignup = (fields) => {
    this.props.signUp(fields, () => {
      this.props.history.push('/home');
    })
  }

  render() {
    return (
      <ReactModal
        onRequestClose={() => {
          this.props.handleModalClose();
        }}
        isOpen={this.props.modalIsOpen}>
        <SignupForm onSubmit={(event) => this.handleSignup(event)} className='signup-form' />
      </ReactModal>
    )
  }
}

function mapStateToProps(state) {
  const { modalIsOpen } = state.modal;
  return { modalIsOpen }
}

export default connect(mapStateToProps, actions)(SignupModal);