import {
    ADD_NEW_BLOG
} from '../actions/types';

const INITIAL_STATE = {
    blogPost: [],
    loading: false
};

export default function(state = INITIAL_STATE,
    action) {
        switch (action.type) {
            case ADD_NEW_BLOG:
                return {
                    ...state,
                    blogPost: [action.payload, ...state.blogPost]
                };
            default:
                return state;
        }
    }