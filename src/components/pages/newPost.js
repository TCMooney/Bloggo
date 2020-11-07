// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import * as actions from '../../actions';
// import NewBlogForm from '../forms/newBlogPostForm';

// class NewBlogPost extends Component {

//     onSubmit = fields => {
//         this.props.createNewBlogPost(fields, () => {
//             this.props.history.push('/home')
//         })
//     }

//     render() {
//         return (
//             <div className='new-blog'>
//                 <NewBlogForm className='blog__form' onSubmit={event => this.onSubmit(event)}
//                 />
//             </div>
//         )
//     }
// }

// NewBlogPost = connect(null, actions)(NewBlogPost);

// export default NewBlogPost;

import React, { useState, useContext } from 'react';

import { BlogContext } from '../contexts/BlogState';

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
            <form onSubmit={onSubmit}>
                <div className='add-blog-title'>
                    <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} placholder='Title' />
                </div>
                <div className='add-blog-content'>
                    <textarea type='text-area' value={content} onChange={(event) => setContent(event.target.value)} placholder='Content' />
                </div>
                <div className='add-blog-tags'>
                    <input type='text' value={tags} onChange={(event) => setTags(event.target.value)} placholder='Tags' />
                </div>
                <button className='submit-button'>Add Blog</button>
            </form>
        </div>
    )
}
