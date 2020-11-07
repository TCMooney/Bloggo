import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BlogContext } from '../contexts/BlogState';
import history from '../../history'

export default function SearchBar(props) {
  const [query, setQuery] = useState('');

  const { searchBlogs } = useContext(BlogContext);

  const onSubmit = (event) => {
    event.preventDefault();

    searchBlogs(query, () => history.push(`/results?query=${query}`), () => setQuery(''));
  }

  return (
    <div className='search-bar-wrapper'>
      <form className='search-bar' onSubmit={onSubmit}>
        <button className='search-button'><FontAwesomeIcon icon='search' /></button>
        <input
          name='query'
          value={query}
          type='text'
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search'
        />

      </form>
    </div>
  )
}