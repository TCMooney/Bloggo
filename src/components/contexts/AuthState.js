import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import AuthReducer from '../reducers/AuthReducer';

const initialState = {
  user: null,
  isAuthenticated: false,
  usersId: {},
  error: null
}

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  async function loadUser(success) {
    try {
      const res = await axios.get('https://tcm-bloggo-api.herokuapp.com/api/auth/loadUser', { withCredentials: true })

      dispatch({
        type: 'AUTHENTICATE_USER',
        payload: res.data
      })

      success()
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: console.log(err)
      })
    }
  }

  async function signUp(fields, success) {
    try {
      const res = await axios.post('https://tcm-bloggo-api.herokuapp.com/api/users', fields, { withCredentials: true });

      dispatch({
        type: 'AUTHENTICATE_USER',
        payload: res.data
      })

      success();
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function signIn(fields, success) {
    try {
      const res = await axios.post('http://localhost:4000/api/auth/', fields, { withCredentials: true })

      dispatch({
        type: 'AUTHENTICATE_USER',
        payload: res.data
      })

      success();
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: console.log(err)
      })
    }
  }

  async function signOut(success) {
    try {
      const res = await axios.get('https://tcm-bloggo-api.herokuapp.com/api/auth/logout', { withCredentials: true })

      dispatch({
        type: 'SIGNOUT_SUCCESS',
        payload: res.data
      })

      success()
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: err
      })
    }
  }

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isAuthenticated: state.isAuthenticated,
      usersId: state.usersId,
      error: state.error,
      loadUser,
      signIn,
      signUp,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}