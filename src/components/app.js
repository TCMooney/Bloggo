import React, { Component } from 'react';

import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

import history from '../history';

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';

import Auth from './pages/auth';
import NewBlogPost from './pages/newPost';
import BlogDetail from './pages/blogDetail';
import EditPost from './pages/editPost';
import { loadUser } from '../actions/auth';

export default class App extends Component {
  componentDidMount() {
    loadUser()
  }
  render() {
    return (
      <Router history={history}>
        <div className='container'>
          <NavigationContainer />
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route path='/home' component={Home} />
            <Route path='/new' component={NewBlogPost} />
            <Route path='/blog/:id' component={BlogDetail} />
            <Route path='/edit/:id' component={EditPost} />
          </Switch>
        </div>
      </Router>
    );
  }
}
