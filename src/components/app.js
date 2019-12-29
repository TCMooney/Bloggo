import React, { Component } from 'react';

import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

import history from '../history';

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Auth from './pages/auth';
import NewBlogPost from './pages/newPost';

export default class App extends Component {
  
  render() {
    return (
      <div className='container'>
        <Router history={history}>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path='/' component={Auth}/>
              <Route path='/home' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/new' component={NewBlogPost}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
