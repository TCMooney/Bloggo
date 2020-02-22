import React from 'react';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <div className='nav-wrapper'>
            <div className='left-side'>
                Bloggo
            </div>
            <div className='right-side'>
                <div className='nav-link-wrapper'>
                    <NavLink
                        exact to='/home'
                        activeClassName='nav-link-active'>
                        Home
                    </NavLink>
                </div>
                <div className='nav-link-wrapper'>
                    <NavLink
                        to='/about'
                        activeClassName='nav-link-active'>
                        About
                    </NavLink>
                </div>
            </div>
        </div>
    )

}