import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import EditBlogForm from '../forms/editBlogForm';

class EditPost extends Component {

    onSubmit = (fields) => {
        const { title, content, tags } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('title', content);
        formData.append('tags', tags);

        this.props.editBlog(this.props.match.params.id, formData, () => { this.props.history.push('/home') });
    }

    onCancel = () => {
        this.props.history.push('home');
    }

    componentDidMount() {
        this.props.fetchBlogWithId(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <EditBlogForm
                    onCancel={() => this.onCancel()}
                    onSubmit={(event) => this.onSubmit(event)}
                />
            </div>
        )
    }
}

EditPost = connect(null, actions)(EditPost);

export default EditPost;