import React, { Component } from 'react'; 

import Logout from './logout';
import SearchBar from './search-bar';

class DropdownMenu extends Component {

  handleSearchSubmit(query) {
    this.props.searchPosts(query)
    history.push(`/results?query=${query}`);
  }

  render() {
    return (
      <div className='dropdown-wrapper'>
          <ul className='dropdown-list'>
            <li className='dropdown-item'>
              
            </li>
            <li className='dropdown-item'>
              My Posts
            </li>
            <li className='dropdown-item'>
              <Logout />
            </li>
          </ul>
      </div>
    )
  }
}

export default DropdownMenu;