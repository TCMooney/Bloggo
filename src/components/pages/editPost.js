import React, { useState, useContext, useEffect } from 'react';

import { BlogContext } from '../contexts/BlogState';
import PageTitle from '../PageTitle';
import InputLabel from '../InputLabel';

export default function EditPost(props) {
    const { getBlogWithId, editBlog, blogPostToEdit } = useContext(BlogContext);

    const currentBlogId = props.match.params.id;

    const { title, content, tags } = blogPostToEdit

    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedContent, setSelectedContent] = useState('');
    const [selectedTags, setSelectedTags] = useState('');

    useEffect(() => {
        getBlogWithId(currentBlogId);
        setSelectedTitle(title);
        setSelectedContent(content);
        setSelectedTags(tags);
    }, [])

    const onSubmit = (event) => {
        event.preventDefault();

        const editedBlog = {
            title: selectedTitle,
            content: selectedContent,
            tags: selectedTags
        }
        editBlog(currentBlogId, editedBlog, () => props.history.push('/home'));
    }
    return (
        <div className='edit-blog-form'>
            <PageTitle title='Edit Blog' />
            <form className='blog-form' onSubmit={onSubmit}>
                <div className='edit-blog-title blog-form-title'>
                    <InputLabel labelTitle='Title' />
                    <input value={selectedTitle} name='title' type='text' onChange={(event) => setSelectedTitle(event.target.value)} />
                </div>
                <div className='edit-blog-content blog-form-content'>
                    <InputLabel labelTitle='Content' />
                    <textarea value={selectedContent} type='text' name='content' onChange={(event) => setSelectedContent(event.target.value)} />
                </div>
                <div className='edit-blog-tags blog-form-tags'>
                    <InputLabel labelTitle='Tags' />
                    <input value={selectedTags} type='text' name='tags' onChange={(event) => setSelectedTags(event.target.value)} />
                </div>
                <button className='submit-button'>Submit Edit</button>
            </form>
        </div >
    )
}
