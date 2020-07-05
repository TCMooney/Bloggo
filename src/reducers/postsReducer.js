import {
    ADD_NEW_BLOG,
    SET_BLOGS,
    FETCH_BLOG_ID,
    SEARCH_BLOGS,
    USER_BLOGS,
    SORT
} from '../actions/types';

const INITIAL_STATE = {
    blogPostToEdit: {},
    blogPosts: [],
    usersPosts: [],
    isLoaded: false,
    searchResults: [],
    sorted: true
};

export default function (state = INITIAL_STATE,
    action) {
    switch (action.type) {
        case ADD_NEW_BLOG:
            return {
                ...state,
                blogPost: [action.payload]
            };
        case SET_BLOGS:
            const blogPosts = action.payload;
            return {
                ...state,
                blogPosts
            };
        case FETCH_BLOG_ID:
            const blogPostId = action.payload;
            var blogPostToEdit = {};
            state.blogPosts.map(blogPost => {
                if (blogPost._id == blogPostId) {
                    blogPostToEdit = blogPost;
                }
            })
            return {
                ...state,
                blogPostToEdit,
                isLoaded: true
            }
        case SEARCH_BLOGS:
            return {
                ...state,
                searchResults: action.payload
            }
        case USER_BLOGS:
            return {
                ...state,
                usersPosts
            }
        default: return state;
    }
}