import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import BlogItem from './blog-items';

class BlogContainer extends Component {
    componentDidMount() {
        this.props.fetchBlogs();
    }

    render() {
        return (
            <div className='blog-posts'>
                <div className='blog-item'>
                    {this.props.blogPosts.map(blogPost => {
                        return <BlogItem key={blogPost._id} {...blogPost} />
                    })}
                </div>
                <div className='new-blog-button'>
                    <button>New Blog</button>
                </div>
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