import React, { useContext, useEffect } from 'react';

import { BlogContext } from '../contexts/BlogState';
import BlogItem from './blog-items';
import PageTitle from '../PageTitle';

export default function BlogContainer() {
    const { blogPosts, getBlogPosts } = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();
    }, []);

    const sortedBlogs = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

    return (
        <div className='blog-posts'>
            <PageTitle title='Recent Posts' />
            <div className='blog-item'>
                {sortedBlogs.map(blogPost => {
                    return <BlogItem key={blogPost._id} {...blogPost} />
                })}
            </div>

        </div>
    )
}
