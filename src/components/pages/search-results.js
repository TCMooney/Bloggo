// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import BlogItem from '../blog/blog-items';

// class Results extends Component {
//   render() {
//     return (
//       <div className='blog-posts'>
//         <div className='result-item'>
//           {this.props.searchResults.map(result => {
//             return <BlogItem key={result._id} {...result} />
//           })}
//         </div>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//   const { searchResults } = state.blogPosts
//   return {
//     searchResults
//   }
// }

// export default connect(mapStateToProps)(Results);

import React, { useContext } from 'react';

import BlogItem from '../blog/blog-items';
import { BlogContext } from '../contexts/BlogState';

export default function SearchResults(props) {
  const { searchResults } = useContext(BlogContext);

  const sortedResults = searchResults.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className='blog-posts'>
      <div className='result-item'>
        {sortedResults.map(result => {
          return <BlogItem key={result._id} {...result} />
        })}
      </div>
    </div>
  )
}
