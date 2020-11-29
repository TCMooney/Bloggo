export default (state, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      const { user } = action.payload
      const usersId = action.payload.userId
      return {
        ...state,
        user,
        usersId,
        isAuthenticated: true
      }
    case 'AUTH_ERROR':
    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        user: '',
        isAuthenticated: false,
        usersId: {},
        error: action.payload
      }
    default: return state
  }
}