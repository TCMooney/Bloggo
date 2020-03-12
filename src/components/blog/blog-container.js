import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import history from '../../history';

import BlogItem from './blog-items';

class BlogContainer extends Component {
    componentDidMount() {
        this.props.fetchBlogs();
    }

    handleNewBlogClick() {
        history.push('/new')
    }

    render() {
        return (
            <div className='blog-posts'>
                <div className='blog-item'>
                    {this.props.blogPosts.map(blogPost => {
                        return <BlogItem key={blogPost._id} {...blogPost} />  
                    })}
                </div>
                <button onClick={this.handleNewBlogClick}>New Blog</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { blogPosts } = state.blogPosts
    return {
        blogPosts
    }
}

export default connect(mapStateToProps, actions)(BlogContainer);