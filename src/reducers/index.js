import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './authReducer';
import blogPosts from './postsReducer'

const rootReducer = combineReducers({
  form,
  auth,
  blogPosts
});

export default rootReducer;