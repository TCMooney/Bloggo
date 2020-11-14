import React from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSignOutAlt, faSearch, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import history from '../history';

import { BlogProvider } from './contexts/BlogState';
import { ModalProvider } from './contexts/ModalState';
import { AuthProvider } from './contexts/AuthState';
import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';
import SignIn from './pages/auth';
import NewPost from './pages/newPost';
import BlogDetail from './pages/blogDetail';
import EditPost from './pages/editPost';
import { ProtectedRoute } from '../helpers/protectedRoute';
import SearchResults from './pages/search-results';
import UsersBlogs from './pages/users-blogs';

library.add(faBars, faSignOutAlt, faSearch, faPlusCircle, faUser);

export default function App() {

  return (
    <AuthProvider>
      <BlogProvider>
        <ModalProvider>
          <Router history={history}>
            <div className='app'>
              <NavigationContainer />
              <Switch>
                <Route exact path='/' component={SignIn} />
                <ProtectedRoute path='/home' component={Home} />
                <ProtectedRoute path='/new' component={NewPost} />
                <ProtectedRoute path='/blog/:id' component={BlogDetail} />
                <ProtectedRoute path='/edit/:id' component={EditPost} />
                <ProtectedRoute path='/results' component={SearchResults} />
                <ProtectedRoute path='/usersBlogs/:userId' component={UsersBlogs} />
              </Switch>
            </div>
          </Router>
        </ModalProvider>
      </BlogProvider>
    </AuthProvider>
  )
}