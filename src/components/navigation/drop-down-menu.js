import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AuthContext } from '../contexts/AuthState';
import { ModalContext } from '../contexts/ModalState';

const useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    const maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  });
  return domNode
}

export default function DropdownMenu() {
  const { userId, signOut } = useContext(AuthContext);
  const { closeDropdown } = useContext(ModalContext);

  let domNode = useClickOutside(() => closeDropdown());

  return (
    <div ref={domNode} className='open-dropdown-wrapper'>
      <ul className='dropdown-list'>
        <li className='dropdown-item'>
          <Link onClick={() => closeDropdown()} to={`/usersBlogs/${userId}`} >My Blogs</Link>
        </li>
        <li className='dropdown-item'>
          <Link to={'/'} onClick={() => signOut(() => closeDropdown())}><FontAwesomeIcon icon='sign-out-alt' /></Link>
        </li>
      </ul>
    </div>
  )
}
