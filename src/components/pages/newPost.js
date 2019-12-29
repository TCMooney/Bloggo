import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import NewBlogForm from '../forms/newBlogPostForm';

class NewBlogPost extends Component {

    onSubmit = fields => {
        this.props.createNewBlogPost(fields, () => {
            this.props.history.push('/home')
        })
    }

    render() {
        return (
            <div className='new-blog'>
                <NewBlogForm className='blog__form' onSubmit={event => this.onSubmit(event)}
                />
            </div>
        )
    }
}

NewBlogPost = connect(null, actions)(NewBlogPost);

export default NewBlogPost;