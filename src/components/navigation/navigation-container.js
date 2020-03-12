import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Logout from './logout';

class NavigationContainer extends Component {
    render() {
        const { isAuthenticated } = this.props.auth;
        const authLinks = (
            <div className='nav-link-wrapper'>
                <Logout />
            </div>
        )
        return (
            <div className='nav-wrapper' >
                <div className='left-side'>
                    <NavLink to={isAuthenticated ? '/home' : '/'}>Bloggo</NavLink>
                </div>
                <div className='right-side'>
                    {isAuthenticated ? authLinks : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(NavigationContainer);