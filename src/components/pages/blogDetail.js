import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BlogContext } from '../contexts/BlogState';
import { AuthContext } from '../contexts/AuthState';

export default function BlogDetail(props) {
    const { blogPostToEdit, getBlogWithId, deleteBlog, userId } = useContext(BlogContext);

    const { user, usersId } = useContext(AuthContext);

    useEffect(() => {
        getBlogWithId(props.match.params.id)
    }, [])

    const { title, content, tags, date, _id } = blogPostToEdit;
    const { name } = userId;
    const parsedDate = new Date(date);
    return (
        <div className='blog-detail-wrapper'>
            <div className='blog-title'>
                {title}
            </div>
            <div className='blog-detail-date'>
                <div>{parsedDate.getMonth() + 1 + '/' + parsedDate.getDate() + '/' + parsedDate.getFullYear()}</div>
            </div>
            <div className='blog-author'>
                {`by: ${name}`}
            </div>
            <div className='blog-content'>
                {content}
            </div>
            <div className='blog-tags'>
                {tags}
            </div>
            {usersId === userId._id ?
                <div className='blog-buttons'>
                    <Link to={`/edit/${_id}`}>Edit</Link>
                    <button onClick={() => deleteBlog(_id, () => props.history.push('/home'))}>Delete</button>
                </div>
                : null}
        </div>
    )
}
