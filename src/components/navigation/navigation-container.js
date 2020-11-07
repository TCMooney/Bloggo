import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthState';
import { ModalContext } from '../contexts/ModalState';
import SignupModal from './signupModal';
import SearchBar from './search-bar';
import DropDownMenu from './drop-down-menu';
import history from '../../history';

export default function NavigationContainer(props) {
    const { isAuthenticated, loadUser } = useContext(AuthContext);

    const { openModal, closeModal, openDropdown, closeDropdown, dropdownIsOpen, modalIsOpen } = useContext(ModalContext);

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
            </div>
            <div className='right-side'>
                {isAuthenticated ?
                    <div className='closed-dropdown-wrapper'>
                        <SearchBar />
                        <a onClick={dropdownIsOpen ? () =>
                            closeDropdown() : () => openDropdown()
                        } className='dropdown-button' >
                            <FontAwesomeIcon icon='bars' />
                        </a>
                    </div>
                    : null}
                {isAuthenticated ? null : modalButton}
                <SignupModal />
                {dropdownIsOpen ? <DropDownMenu /> : null}
            </div>
        </div>
    )
}
