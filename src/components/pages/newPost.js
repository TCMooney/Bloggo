import React, { Component } from 'react';

import NewBlogForm from '../forms/newBlogPostForm';

class NewBlogPost extends Component {
    render() {
        return (
            <div className='new-blog'>
                <NewBlogForm/>
            </div>
        )
    }
}

export default NewBlogPost;