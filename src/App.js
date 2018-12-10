import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Login from './../src/pages/LoginPage';
import Home from './../src/pages/HomePage';
import fire from './config/Fire';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <Router basename="/react-auth-ui/">
          <div className="App">
            {this.state.user ? (<Home />) : (<Login/>)}          
          </div>
        </Router>
      </div>
=======
      <Router basename="/react-auth-ui/">
        <div className="App">
          {this.state.user ? (<Home />) : (<Login/>)}          
        </div>
      </Router>
>>>>>>> b11caf6b2915ab6fef7e244c511287a007f319be
    );
  }
}

export default App;
