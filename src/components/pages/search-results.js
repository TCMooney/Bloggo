import React, { useContext } from 'react';

import BlogItem from '../blog/blog-items';
import NewBlogButton from '../blog/NewBlogButton';
import { BlogContext } from '../contexts/BlogState';
import PageTitle from '../PageTitle';

export default function SearchResults(props) {
  const { searchResults } = useContext(BlogContext);
  console.log(searchResults.userId)

  const sortedResults = searchResults.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className='blog-posts'>
      <NewBlogButton />
      <div className='blog-posts-wrapper'>
        <PageTitle title='Search Results' />
        <div className='result-item'>
          {sortedResults.length === 0 ?
            <h3 className='no-results'>No Results Found!</h3>
            :
            <div>
              {sortedResults.map(result => {
                return <BlogItem key={result._id} {...result} />
              })}
            </div>
          }
        </div>
      </div>
    </div>
  )
}