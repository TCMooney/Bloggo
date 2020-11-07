import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BlogContext } from '../contexts/BlogState';
import BlogItem from './blog-items';

export default function BlogContainer() {
    const { blogPosts, getBlogPosts } = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();
    }, []);

    const sortedBlogs = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

    return (
        <div className='blog-posts'>
            <div className='blog-item'>
                {sortedBlogs.map(blogPost => {
                    return <BlogItem key={blogPost._id} {...blogPost} />
                })}
            </div>
            <Link to='/new'>Add New Blog</Link>
            {/* <button onClick={this.handleNewBlogClick}>New Blog</button> */}
        </div>
    )
}
