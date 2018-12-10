import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './../config/Fire';
import { Button } from 'reactstrap';

class LinkYourCameraForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            passwordError: '',
            cameraid: '',
            cameraidError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSubmit(e) {
        e.preventDefault();
        const err = this.validateForm
        var firestore = fire.firestore();
        if(err)
        {
            firestore.settings({
                timestampsInSnapshots: true
            })
            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(
            (user)=>{
                if(user){
                const userRef = firestore.collection("users").add({
                    cameraID: this.state.cameraid,
                    email: this.state.email
                    });
                }
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ...
            });
        }
        
    }

    validateForm = () => {
        let isValid = true;
        var firestore = fire.firestore();
        const cameraID = firestore.collection('cameraid').get();
        const errors = {
            passwordError: '',
            cameraidError: ''
        };
        
        if(this.state.password.length < 5)
        {
            isValid = false;
            errors.passwordError = "Password must be atleast 5 characters long";
        }

        if(this.state.cameraid.length < 8)
        {
            isValid = false;
            errors.cameraidError = "Please enter a valid CameraID";
        }

        this.setState({
            ...this.setState,
            ...errors
        })
        return isValid;
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Camera ID</label>
                <input type="text" id="cameraid" className="FormField__Input" required="required" placeholder="Enter your Camera ID" name="cameraid" value={this.state.cameraid} onChange={this.handleChange} errorText={this.state.cameraidError} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" required="required" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} errorText={this.state.passwordError} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" required="required" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <Button className="FormField__Button mr-20">Link Your Camera</Button> <Link to="/sign-in" className="FormField__Link">I've Already Linked my Camera</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default LinkYourCameraForm;
