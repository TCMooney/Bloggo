import React, { useContext, useEffect } from 'react';

import { BlogContext } from '../contexts/BlogState';
import { AuthContext } from '../contexts/AuthState';
import BlogItem from '../blog/blog-items';

export default function UsersBlogs() {
  const { fetchUsersBlogs, usersBlogs } = useContext(BlogContext);

  const { usersId } = useContext(AuthContext);

  useEffect(() => {
    fetchUsersBlogs(usersId)
  }, [])

  const sortedUsersBlogs = usersBlogs.sort((a, b) => new Date(b.date) - new Date(a.date))
  return (
    <div className='users-blogs-wrapper'>
      {sortedUsersBlogs.map(blog => {
        return <BlogItem key={blog._id} {...blog} />
      })}
    </div>
  )
}
