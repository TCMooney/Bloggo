import React, { useContext } from 'react';
import NavLink from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AuthContext } from '../contexts/AuthState';

export default function Logout() {

  const { signOut } = useContext(AuthContext);

  return (
    <NavLink className='logout' onClick={() => signOut()} to='/'>Logout<FontAwesomeIcon icon='sign-out-alt' /> </NavLink>
  )
}
