import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

export default class Signup extends React.Component {
    constructor() {
        super();
        
        this.state = {
            registrationMsg: "",
                invalidLogin: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }

    handleClick(event) {
        // Creates a new user
        if (true) {
            let username = this.refs.username.value;
            let password = this.refs.password.value;
        
            // axios.get()
            
            try {
                axios.post('/users', {
                    userName: username,
                    password: password
                }).then(res => {

                    if (res.data.loggedIn) {
                        console.log('We have registered a user!', res.data.user);
                        this.props.login(res.data.user);
                        this.props.history.push('/secure');
                    }
                    else{
                        console.log('User already Exists', res.data.user);
                        this.setState({registrationMsg: "User already exits"});
                    }

                });
            } catch (e) {
                console.error(`Caught: ${e}`)
            }
        }
    }

    handleHome() {
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h4>{this.state.registrationMsg}</h4>
                <h3>Sign Up</h3>
                <label>User Name: <input type="text" ref="username" /></label><br />
                <label>Password: <input type="password" ref="password" /></label><br />
                <label>Confirm Password: <input type="password" ref="passwordConfirm" /></label><br />
                <button type="button" onClick={this.handleClick}>Sign Up</button>
                <div>
                    <button type="button" onClick={this.handleHome}>Home</button>
                </div>
            </div>
        );
    }
}