import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './authReducer';
import blogPosts from './postsReducer'
import errors from './errorReducer'

const rootReducer = combineReducers({
  form,
  auth,
  blogPosts,
  errors
});

export default rootReducer;