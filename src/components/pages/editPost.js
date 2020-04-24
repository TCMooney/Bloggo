import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import EditBlogForm from '../forms/editBlogForm';

class EditPost extends Component {

    onSubmit = (fields) => {
        this.props.editBlog(this.props.match.params.id, fields, () => { this.props.history.push('/home') });
    }

    onCancel = () => {
        this.props.history.push('/home');
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