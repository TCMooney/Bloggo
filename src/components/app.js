import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
import UsersBlogs from './pages/users-blogs';
import DropDownMenu from './navigation/drop-down-menu';

library.add(faBars, faSignOutAlt);

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const { dropDownIsOpen } = this.props.dropdown
    return (
      <Router history={history}>
        <div className='container'>
          <NavigationContainer />
          {dropDownIsOpen ? <DropDownMenu /> : null}
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route path='/home' component={requireAuth(Home)} />
            <Route path='/new' component={requireAuth(NewBlogPost)} />
            <Route path='/blog/:id' component={requireAuth(BlogDetail)} />
            <Route path='/edit/:id' component={requireAuth(EditPost)} />
            <Route path='/results' component={Results} />
            <Route path='/usersBlogs/:id' compnent={UsersBlogs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  dropdown: state.dropdown
});

export default connect(mapStateToProps, actions)(App);