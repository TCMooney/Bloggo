import React, { useState, useContext } from 'react';

import { BlogContext } from '../contexts/BlogState';
import InputLabel from '../InputLabel';
import PageTitle from '../PageTitle';

export default function NewPost(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    const { addBlog } = useContext(BlogContext);

    const onSubmit = (event) => {
        event.preventDefault();

        const newBlog = {
            title,
            content,
            tags
        }
        addBlog(newBlog, () => props.history.push('/home'));
    }

    return (
        <div className='add-blog-form'>
            <PageTitle title='New Blog' />
            <form className='blog-form' onSubmit={onSubmit}>
                <div className='new-blog-title blog-form-title'>
                    <InputLabel labelTitle='Title' />
                    <input className='blog-title-input' type='text' value={title} onChange={(event) => setTitle(event.target.value)} placholder='Title' />
                </div>
                <div className='new-blog-content blog-form-content'>
                    <InputLabel labelTitle='Content' />
                    <textarea className='blog-content-input' type='text-area' value={content} onChange={(event) => setContent(event.target.value)} placholder='Content' />
                </div>
                <div className='new-blog-tags blog-form-tags'>
                    <InputLabel labelTitle='Tags' />
                    <input className='blog-tags-input' type='text' value={tags} onChange={(event) => setTags(event.target.value)} placholder='Tags' />
                </div>
                <button className='submit-button'>Add Blog</button>
            </form>
        </div>
    )
}
