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
        <div className='blog-detail'>
            <div className='blog-detail-wrapper'>
                <div className='blog-detail-title'>
                    {title}
                </div>
                <div className='blog-detail-date'>
                    <div>{parsedDate.getMonth() + 1 + '/' + parsedDate.getDate() + '/' + parsedDate.getFullYear()}</div>
                </div>
                <div className='blog-detail-author'>
                    {`by: ${name}`}
                </div>
                <div className='blog-detail-content'>
                    {content}
                </div>
                <div className='blog-detail-tags'>
                    {tags}
                </div>
                {usersId === userId._id ?
                    <div className='blog-detail-buttons'>
                        <Link className='blog-detail-edit-button' to={`/edit/${_id}`}>Edit</Link>
                        <button className='blog-detail-delete-button' onClick={() => deleteBlog(_id, () => props.history.push('/home'))}>Delete</button>
                    </div>
                    : null}
            </div>
        </div>
    )
}
