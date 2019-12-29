import axios from 'axios';
import { ROOT_URL } from '../config';

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
                console.log(response.data);
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}