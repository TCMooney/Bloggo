import {
    ADD_NEW_BLOG,
    SET_BLOGS,
    FETCH_BLOG_ID,
    SEARCH_BLOGS
} from '../actions/types';

const INITIAL_STATE = {
    blogPostToEdit: {},
    blogPosts: [],
    isLoaded: false,
    searchResults: []
};

export default function (state = INITIAL_STATE,
    action) {
    switch (action.type) {
        case ADD_NEW_BLOG:
            return {
                ...state,
                blogPost: [action.payload, ...state.blogPost]
            };
        case SET_BLOGS:
            const blogList = action.payload;
            const blogPosts = blogList.reverse()
            return {
                ...state,
                blogPosts
            }
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
        default: return state;
    }
}