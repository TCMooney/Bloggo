import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../../actions';

class BlogDetail extends Component {
    componentDidMount() {
        this.props.fetchBlogWithId(this.props.match.params.id)
    }

    handleEditBlog = () => {
        history.push(`edit/${this.props.blogPostToEdit._id}`)
    }

    handleDeleteBlog = () => {
        this.props.deleteBlog(this.props.blogPostToEdit._id, () => { this.props.history.push('/home') });
    }

    render() {
        const { title, content, tags, date } = this.props.blogPostToEdit;
        const parsedDate = new Date(date);
        if (this.props.isLoaded === false) {
            return <div> loading... </div>
        } else {
            const { name } = this.props.blogPostToEdit.userId
            return (
                <div className='blog-detail-wrapper'>
                    <div className='blog-title'>
                        {title}
                    </div>
                    {/* TODO Add authorsName to blog detail */}
                    <div className='blog-detail-date'>
                        <div>{parsedDate.getMonth() + 1 + '/' + parsedDate.getDate() + '/' + parsedDate.getFullYear()}</div>
                    </div>
                    <div className='blog-author'>
                        {`by: ${name}`}
                    </div>
                    <div className='blog-content'>
                        {content}
                    </div>
                    <div className='blog-tags'>
                        {tags}
                    </div>
                    {this.props.user._id === this.props.blogPostToEdit.userId ?
                        <div className='blog-buttons'>
                            <NavLink to={`/edit/${this.props.blogPostToEdit._id}`}>Edit</NavLink>
                            <button onClick={this.handleDeleteBlog}>Delete</button>
                        </div>
                        : null}
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    const { blogPostToEdit, isLoaded } = state.blogPosts;
    const { user } = state.auth;
    return (
        { blogPostToEdit, user, isLoaded }
    )
}

export default connect(mapStateToProps, actions)(BlogDetail);