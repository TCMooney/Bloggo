import React, { Component } from 'react';
import axios from 'axios';

import { ROOT_URL } from '../../config';
import BlogItem from './blog-items';

export default class BlogContainer extends Component {
    constructor() {
        super();

        this.state = {
            data:[]
        }
    }

    getBlogItems() {
        axios.get(`${ROOT_URL}/api/blogPost/getPosts`)
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getBlogItems();
    }

    blogPosts() {
        return this.state.data.map(post => {
            let formattedDate = new Date(post.date);
            let postedDate =`${formattedDate.getMonth() + 1}/${formattedDate.getDate()}/${formattedDate.getFullYear()}`;
            return <BlogItem key={post.id} title={post.title} date={postedDate} slug={post.id}/>
        })
    }
    render() {
        return (
            <div className='blog-wrapper'>
                {this.blogPosts()}
            </div>
        )
    }
}