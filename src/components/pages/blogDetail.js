import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../../actions';

class BlogDetail extends Component {
    componentDidMount() {
        this.props.fetchBlogWithId(this.props.match.params.id)
        console.log(this.props.blogPostToEdit)
    }

    handleEditBlog = () => {
        history.push(`edit/${this.props.blogPostToEdit._id}`)
    }


    render() {
        const { title, content, tags, date, _id } = this.props.blogPostToEdit;
        const parsedDate = new Date(date);
        return (
            <div className='blog-detail-wrapper'>
                <div className='blog-title'>
                    {title}
                </div>
                <div className='blog-detail-date'>
                    <div>{parsedDate.getMonth() + 1 + '/' + parsedDate.getDate() + '/' + parsedDate.getFullYear()}</div>
                </div>
                <div className='blog-content'>
                    {content}
                </div>
                <div blog-tags>
                    {tags}
                </div>
                <NavLink to={`/edit/${this.props.blogPostToEdit._id}`}>Edit</NavLink>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { blogPostToEdit } = state.blogPosts
    return { blogPostToEdit };
}

export default connect(mapStateToProps, actions)(BlogDetail);