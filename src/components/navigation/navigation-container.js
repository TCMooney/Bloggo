import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import SignupModal from './signupModal';
import Logout from './logout';

class NavigationContainer extends Component {
    render() {
        const { isAuthenticated } = this.props.auth;
        const authLinks = (
            <div className='nav-link-wrapper'>
                <Logout />
            </div>
        )
        const modalButton = (
            <a onClick={this.props.handleModalOpen}>Signup</a>
        )
        return (
            <div className='nav-wrapper' >
                <div className='left-side'>
                    <NavLink to={isAuthenticated ? '/home' : '/'}>Bloggo</NavLink>
                </div>
                <div className='right-side'>
                    {isAuthenticated ? authLinks : modalButton}
                    <SignupModal />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, actions)(NavigationContainer);