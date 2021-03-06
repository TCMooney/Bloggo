import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import BlogReducer from '../reducers/BlogReducer';

const initialState = {
  blogPosts: [],
  blogPostToEdit: {},
  userId: {},
  usersBlogs: [],
  searchResults: [],
  error: null,
  isLoading: true
}

export const BlogContext = createContext(initialState);

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BlogReducer, initialState);

  async function getBlogPosts() {
    try {
      const res = await axios.get('https://tcm-bloggo-api.herokuapp.com/api/blogPost/getPosts', { withCredentials: true });

      dispatch({
        type: 'GET_BLOGS',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: console.log(err)
      })
    }
  }

  async function getBlogWithId(id) {
    try {
      const res = await axios.get(`https://tcm-bloggo-api.herokuapp.com/api/blogPost/getPostById/${id}`, { withCredentials: true });

      dispatch({
        type: 'GET_BLOG_ID',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function addBlog(blog, success) {
    try {
      const res = await axios.post('https://tcm-bloggo-api.herokuapp.com/api/blogPost/new', blog, { withCredentials: true })

      dispatch({
        type: 'ADD_BLOG',
        payload: res.data
      })

      success();
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function fetchUsersBlogs(userId) {
    try {
      const res = await axios.get(`https://tcm-bloggo-api.herokuapp.com/api/blogPost/getPostsByUser/${userId}`, { withCredentials: true })

      dispatch({
        type: 'FETCH_USERS_BLOGS',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function deleteBlog(id, success) {
    try {
      await axios.delete(`https://tcm-bloggo-api.herokuapp.com/api/blogPost/${id}/delete`, { withCredentials: true });

      dispatch({
        type: 'DELETE_BLOG',
        payload: id
      })

      success();
    } catch (err) {
      console.log(err)
    }
  }

  async function searchBlogs(query, success, clearForm) {
    try {
      const res = await axios.get(`https://tcm-bloggo-api.herokuapp.com/api/blogPost/searchPosts?query=${query}`, { withCredentials: true })

      dispatch({
        type: 'SEARCH_BLOGS',
        payload: res.data
      })

      clearForm()
      success();
    } catch (err) {
      console.log(err)
    }
  }

  async function editBlog(itemId, formData, success) {
    try {
      await axios.put(`https://tcm-bloggo-api.herokuapp.com/api/blogPost/edit/${itemId}`, formData, { withCredentials: true });

      console.log('Edit Successful');
      success()
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <BlogContext.Provider value={{
      blogPosts: state.blogPosts,
      blogPostToEdit: state.blogPostToEdit,
      userId: state.userId,
      auth: state.auth,
      error: state.error,
      searchResults: state.searchResults,
      usersBlogs: state.usersBlogs,
      isLoading: state.isLoading,
      getBlogPosts,
      getBlogWithId,
      addBlog,
      fetchUsersBlogs,
      deleteBlog,
      editBlog,
      searchBlogs
    }}>
      {children}
    </BlogContext.Provider>
  )
}

