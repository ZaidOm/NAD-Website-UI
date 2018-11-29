import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './../config/Fire';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            visible: true
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        
    }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSubmit(e) {
        e.preventDefault();

        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            return (
                alert("Invalid Login! Please Try again.")
            );
        });
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    
    
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your E-Mail Address" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
                
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Link Your Camera</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
