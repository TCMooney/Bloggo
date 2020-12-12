export default (state, action) => {
  switch (action.type) {
    case 'GET_BLOGS':
      return {
        ...state,
        blogPosts: action.payload,
        isLoading: true
      }
    case 'GET_BLOG_ID':
      return {
        ...state,
        blogPostToEdit: action.payload,
        userId: action.payload.userId,
        isLoading: false
      }
    case 'ADD_BLOG':
      return {
        ...state,
        blogPosts: [action.payload, ...state.blogPosts]
      }
    case 'FETCH_USERS_BLOGS':
      return {
        ...state,
        usersBlogs: action.payload,
      }
    case 'SEARCH_BLOGS':
      return {
        ...state,
        searchResults: action.payload,
        isLoading: true
      }
    case 'DELETE_BLOG':
      return {
        ...state,
        blogPosts: state.blogPosts.filter(blogPost => blogPost._id !== action.payload)
      }
    default: return state;
  }
}