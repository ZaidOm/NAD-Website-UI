import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import LinkYourCameraForm from './LinkYourCameraForm';
import SignInForm from './SignInForm';
import './../App.css';

class Login extends Component {

    render() {
        return (
        <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Link Your Camera</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Link Your Camera</NavLink>
              </div>

              <Route exact path="/" component={LinkYourCameraForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>
        );
    }
}

export default Login;