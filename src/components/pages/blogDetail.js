import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { FormButton } from '../forms/formFields';
import history from '../../history';

class BlogDetail extends Component {
    componentDidMount() {
        this.props.fetchBlogWithId(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                { this.props.blogPost }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { blogPost } = state.blogPosts
    return { blogPost };
}

export default connect(mapStateToProps, actions)(BlogDetail);