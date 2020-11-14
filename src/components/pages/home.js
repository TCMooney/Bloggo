import React from 'react';
import BlogContainer from '../blog/blog-container';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
    return (
        <div className='home-page'>
            <BlogContainer />
            <Link className='new-blog-link' to='/new'><FontAwesomeIcon icon='plus-circle' /></Link>
        </div>
    );
}