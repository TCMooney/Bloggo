import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Auth from './pages/auth';

export default class App extends Component {
  
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path='/' component={Auth}/>
              <Route path='/home' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
