import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import SignupModal from './signupModal';
import Logout from './logout';
import SearchBar from './search-bar';
import history from '../../history';

class NavigationContainer extends Component {

    handleSearchSubmit(query) {
        console.log(query);
        history.push('/results');
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const authLinks = (
            <div className='nav-link-wrapper'>
                <Logout />
            </div>
        )
        const modalButton = (
            <a onClick={this.props.handleModalOpen} className='signup-button' >Signup</a>
        )

        return (
            <div className='nav-wrapper' >
                <div className='left-side'>
                    <NavLink className='home-button' to={isAuthenticated ? '/home' : '/'}>Bloggo</NavLink>
                </div>
                <div className='right-side'>
                    {isAuthenticated ?
                        <SearchBar
                            onSubmit={(query) => { this.handleSearchSubmit(query) }}
                        />
                        : null}
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