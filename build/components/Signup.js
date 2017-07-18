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

                <label className="in"><input type="text" autoComplete='on' placeholder='User Name' ref="username" /></label><br/>
                <label className="in"><input type="password" placeholder='Password' ref='password' maxLength="100" required/></label><br/>
                <label className="in"><input type="password" placeholder='Confirm Password'  ref="passwordConfirm" required/></label><br/>
                <button className="btn waves-effect teal lighten-2 waves-light" onClick={this.handleClick}>Sign Up
                    <i className="material-icons right">music_video</i></button><span className="waves-effect hoverable material-icons right" onClick={this.handleHome}>close</span>
                {/*<div>
                    <button className="btn waves-effect waves-light" onClick={this.handleHome}>
                    <i className="material-icons right">close</i></button>
                </div>*/}
            </div>
        );
    }
}