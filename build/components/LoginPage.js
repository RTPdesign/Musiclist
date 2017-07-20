import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import Signup from './Signup';

export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleRTP = this.handleRTP.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

    this.state = {
      errors: {
        invalidLogin: false
      }
    }
  }

  handleClick(event) {
    // signed in User
    let userName = this.refs.userName.value;
    let password = this.refs.password.value;
    try {
      axios.post('/login', {
        userName,
        password
      }).then((res) => {
        if (res.data.loggedIn) {
          this.props.login(res.data.user, res.data.loggedIn);
          this.props.history.push('/secure');
        }
        else {
          this.props.history.push('/');
          this.setState({
            errors: {
              invalidLogin: true
            }
          });
        }

      });
    } catch (e) {
      console.error(`Caught: ${e}`)
    }
  }

  handleRTP() {
    location.replace("http://rtpdesign.com");
  };

  handleSignup() {
    this.props.history.push('/signup');
  };

  render() {
    let errorMessage = null;
    if (this.state.errors.invalidLogin) {
      errorMessage = (<h4 className="container yellow lighten-5 center">Invalid Username or Password</h4>);
    }
    return (
      <div className="card yellow lighten-5" >
        <div className="card-content">
          <h1 className="center">Welcome to Musiclist</h1>
          <span className="card-title waves-effect waves-red darken-4 material-icons center" onClick={this.handleRTP}>
            remove_red_eye favorite music_note
            </span>
          <label className="in"><input type='text' id="UserName-field" autoComplete='on' placeholder='User Name' ref='userName' maxLength="50" required /></label>
          <label className="in"><input type='password' id="Password-field" placeholder='Password' ref='password' maxLength="100" required /></label>
          <button className="btn waves-effect teal lighten-2 waves-light" id="Login-button" onClick={this.handleClick}>Log In
                    <i className="material-icons right">music_note</i></button>

          

          <button className="btn waves-effect teal lighten-2 waves-light right" onClick={this.handleSignup}>Sign Up
                      <i className="material-icons right">expand_more</i></button>
          {errorMessage}            
          <Route path='/signup' render={(routeProps) => <Signup {...this.props} {...routeProps} />} />

        </div>
      </div>
    );
  }
}