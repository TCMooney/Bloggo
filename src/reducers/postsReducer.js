import {
    ADD_NEW_BLOG,
    SET_BLOGS,
    FETCH_BLOG_ID
} from '../actions/types';

const INITIAL_STATE = {
    blogPostToEdit: {},
    blogPosts: []
};

export default function(state = INITIAL_STATE,
    action) {
        switch (action.type) {
            case ADD_NEW_BLOG:
                return {
                    ...state,
                    blogPost: [action.payload, ...state.blogPost]
                };
            case SET_BLOGS:
                const blogPosts = action.payload;
                return {
                    ...state,
                    blogPosts
                }
            case FETCH_BLOG_ID:
                const blogPostId = action.payload;
                var blogPostToEdit = {};
                state.blogPosts.map(blogPost => {
                    if(blogPost._id == blogPostId) {
                        blogPostToEdit = blogPost;
                    }
                })
                return {
                    ...state,
                    blogPostToEdit
                }
            default: return state;
        }
    }