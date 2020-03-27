import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './authReducer';
import blogPosts from './postsReducer'
import errors from './errorReducer'
import modal from './modalReducer';

const rootReducer = combineReducers({
  form,
  auth,
  blogPosts,
  errors,
  modal
});

export default rootReducer;