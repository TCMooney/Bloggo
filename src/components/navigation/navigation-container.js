import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

export default function () {
    return (
        <div className='nav-wrapper'>
            <div className='left-side'>
                <div className='nav-link-wrapper'>
                    <NavLink
                        exact to='/'
                        activeClassname='nav-link-active'>
                        Home
                    </NavLink>
                </div>
                <div className='nav-link-wrapper'>
                    <NavLink
                        to='/about'
                        activeClassname='nav-link-active'>
                        About
                    </NavLink>
                </div>
                <div className='nav-link-wrapper'>
                    <NavLink
                        to='/contact'
                        activeClassname='nav-link-active'>
                        Contact
                    </NavLink>
                </div>
            </div>
            <div className='right-side'>
                Bloggo
            </div>
        </div>
    )

}