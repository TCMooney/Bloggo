import {
    SET_BLOGS,
    FETCH_BLOG_ID
} from './types';

import axios from 'axios';
import { ROOT_URL } from '../config';

export function fetchBlogs() {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/api/blogPost/getPosts`)
            .then(response => {
                dispatch({
                    type: SET_BLOGS,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function fetchBlogWithId(id) {
    return {
        type: FETCH_BLOG_ID,
        payload: id
    }
}

export function createNewBlogPost(formData, success) {
    const token = localStorage.getItem('token');
    return function () {
        axios.post(`${ROOT_URL}/api/blogPost/new`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        })
            .then(response => {
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function editBlog(itemId, formData, success) {
    const token = localStorage.getItem('token');
    const id = itemId;
    return function () {
        axios.put(`${ROOT_URL}/api/blogPost/edit/${id}`, formData, {
            headers: {
                'Content-type': 'application/json',
                'x-auth-token': token
            }
        })
            .then(response => {
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function deleteBlog(itemId, success) {
    const token = localStorage.getItem('token');
    const id = itemId;
    return function () {
        axios.delete(`${ROOT_URL}/api/blogPost/${id}/delete`, {
            headers: {
                'Content-type': 'application/json',
                'x-auth-token': token
            }
        })
            .then(response => {
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}