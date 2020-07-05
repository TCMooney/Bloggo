import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './authReducer';
import blogPosts from './postsReducer';
import errors from './errorReducer';
import modal from './modalReducer';
import dropdown from './drop-down-menu-reducer';

const rootReducer = combineReducers({
  form,
  auth,
  blogPosts,
  errors,
  modal,
  dropdown
});

export default rootReducer;