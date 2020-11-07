// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

// import EditBlogForm from '../forms/editBlogForm';

// class EditPost extends Component {

//     onSubmit = (fields) => {
//         this.props.editBlog(this.props.match.params.id, fields, () => { this.props.history.push('/home') });
//     }

//     onCancel = () => {
//         this.props.history.push('/home');
//     }

//     componentDidMount() {
//         this.props.fetchBlogWithId(this.props.match.params.id)
//     }
//     render() {
//         return (
//             <div>
//                 <EditBlogForm
//                     onCancel={() => this.onCancel()}
//                     onSubmit={(event) => this.onSubmit(event)}
//                 />
//             </div>
//         )
//     }
// }

// EditPost = connect(null, actions)(EditPost);

// export default EditPost;

import React, { useState, useContext, useEffect } from 'react';

import { BlogContext } from '../contexts/BlogState';

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
            content: setSelectedContent,
            tags: selectedTags
        }
        editBlog(currentBlogId, editedBlog, () => props.history.push('/home'));
    }
    return (
        <div className='edit-blog-form'>
            <form onSubmit={onSubmit}>
                <div className='edit-blog-title'>
                    <input value={selectedTitle} name='title' type='text' onChange={(event) => setSelectedTitle(event.target.value)} />
                </div>
                <div className='edit-blog-content'>
                    <textarea value={selectedContent} type='text' name='content' onChange={(event) => setSelectedContent(event.target.value)} />
                </div>
                <div className='edit-blog-tags'>
                    <input value={selectedTags} type='text' name='tags' onChange={(event) => setSelectedTags(event.target.value)} />
                </div>
                <button className='edit-submit-button'>Submit Edit</button>
            </form>
        </div>
    )
}
