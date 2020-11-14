import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthState';
import { ModalContext } from '../contexts/ModalState';
import SignupModal from './signupModal';
import SearchBar from './search-bar';

import history from '../../history';

export default function NavigationContainer(props) {
    const { isAuthenticated, loadUser, userId, signOut } = useContext(AuthContext);

    const { openModal, closeModal, modalIsOpen } = useContext(ModalContext);

    const modalButton = (
        <a onClick={modalIsOpen ? () => closeModal() : () => openModal()} className='signup-button' >Signup</a>
    )

    useEffect(() => {
        loadUser(() => history.push('/home'))
    }, [])
    return (
        <div className='nav-wrapper' >
            <div className='left-side'>
                <NavLink className='home-button' to={isAuthenticated ? '/home' : '/'}>Bloggo</NavLink>
                <SearchBar />
            </div>
            <div className='right-side'>
                {isAuthenticated ?
                    <div className='right-side-buttons'>
                        <NavLink className='sign-out-button' to={'/'} onClick={() => signOut()}><FontAwesomeIcon icon='sign-out-alt' /></NavLink>
                        <NavLink className='users-blogs-button' to={`/usersBlogs/${userId}`} ><FontAwesomeIcon icon='user' /></NavLink>
                    </div>
                    : null}

                {isAuthenticated ? null : modalButton}
                <SignupModal />
            </div>
        </div>
    )
}
