import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as actions from '../../actions';

import SignupModal from './signupModal';
import history from '../../history';
import SearchBar from './search-bar';

class NavigationContainer extends Component {

    handleSearchSubmit(query) {
        this.props.searchPosts(query)
        history.push(`/results?query=${query}`);
      }

    render() {
        const { dropDownIsOpen } = this.props.dropdown;
        const { isAuthenticated } = this.props.auth;
        const modalButton = (
            <a onClick={this.props.handleModalOpen} className='signup-button' >Signup</a>
        )
        return (
            <div className='nav-wrapper' >
                <div className='left-side'>
                    <NavLink className='home-button' to={isAuthenticated ? '/home' : '/'}>Bloggo</NavLink>
                </div>
                <div className='right-side'>
                    <div>
                        <a onClick={this.props.handleDropdownOpen} className='dropdown-button' >
                            <FontAwesomeIcon icon='bars'/>
                        </a>
                        <SearchBar
                onSubmit={(query) => { this.handleSearchSubmit(query) }}
              />
                        {isAuthenticated ? null : modalButton}
                    </div>
                    <SignupModal />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    dropdown: state.dropdown
});

export default connect(mapStateToProps, actions)(NavigationContainer);