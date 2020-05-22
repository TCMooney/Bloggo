import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SignupForm from '../forms/signupForm';


class SignupModal extends Component {
  constructor() {
    super();

    this.customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '340px'
      },
      overlay: {
        backgroundColor: 'rgba(1, 1, 1, 0.75)'
      }
    };
  }


  handleSignup = (fields) => {
    this.props.signUp(fields, () => {
      this.props.handleModalClose()
    })
  }



  render() {
    return (
      <ReactModal
        style={this.customStyles}
        ariaHideApp={false}
        onRequestClose={() => {
          this.props.handleModalClose();
        }}
        isOpen={this.props.modalIsOpen}>
        <div className='signup-wrapper'>
          <SignupForm onSubmit={(event) => this.handleSignup(event)} className='signup-form' />
        </div>
      </ReactModal>
    )
  }
}

function mapStateToProps(state) {
  const { modalIsOpen } = state.modal;
  return { modalIsOpen }
}

export default connect(mapStateToProps, actions)(SignupModal);