import React, { useContext, useEffect } from 'react';

import { BlogContext } from '../contexts/BlogState';
import { AuthContext } from '../contexts/AuthState';
import BlogItem from '../blog/blog-items';
import PageTitle from '../PageTitle';

export default function UsersBlogs() {
  const { fetchUsersBlogs, usersBlogs } = useContext(BlogContext);

  const { usersId, user } = useContext(AuthContext);

  useEffect(() => {
    fetchUsersBlogs(usersId)
  }, [])

  const sortedUsersBlogs = usersBlogs.sort((a, b) => new Date(b.date) - new Date(a.date))

  const { name } = user;

  const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className='users-blogs-wrapper'>
      <PageTitle title={`${capitalize(name)}'s Blogs`} />
      {sortedUsersBlogs.length === 0 ?
        <h3 className='no-results'>You don't have any blogs!</h3>
        :
        <div>
          {sortedUsersBlogs.map(blog => {
            return <BlogItem key={blog._id} {...blog} />
          })
          }
        </div>
      }
    </div>
  )
}
