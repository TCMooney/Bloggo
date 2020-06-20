import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogItem from '../blog/blog-items';

class Results extends Component {
  render() {
    return (
      <div className='blog-posts'>
        <div className='result-item'>
          {this.props.searchResults.map(result => {
            return <BlogItem key={result._id} {...result} />
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { searchResults } = state.blogPosts
  return {
    searchResults
  }
}

export default connect(mapStateToProps)(Results);