import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NewBlogButton() {
  return (
    <div>
      <Link className='new-blog-link' to='/new'><FontAwesomeIcon icon='plus-circle' /></Link>
    </div>
  )
}
