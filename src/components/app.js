import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

import history from '../history';
import * as actions from '../actions';

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';
import Auth from './pages/auth';
import NewBlogPost from './pages/newPost';
import BlogDetail from './pages/blogDetail';
import EditPost from './pages/editPost';
import requireAuth from '../helpers/requireAuth';
import Results from './pages/search-results';

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <Router history={history}>
        <div className='container'>
          <NavigationContainer />
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route path='/home' component={requireAuth(Home)} />
            <Route path='/new' component={requireAuth(NewBlogPost)} />
            <Route path='/blog/:id' component={requireAuth(BlogDetail)} />
            <Route path='/edit/:id' component={requireAuth(EditPost)} />
            <Route path='/results' component={Results} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  return auth;
}

export default connect(mapStateToProps, actions)(App);