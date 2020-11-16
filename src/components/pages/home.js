import React from 'react';
import BlogContainer from '../blog/blog-container';
import NewBlogButton from '../blog/NewBlogButton';

export default function () {
    return (
        <div className='home-page'>
            <BlogContainer />
            <NewBlogButton />
        </div>
    );
}