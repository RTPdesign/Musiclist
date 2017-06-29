import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import Signup from './Signup';

export default class LoginPage extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

    this.state = {
        errors: {
            invalidLogin: false
        }
    }
  }

handleClick(event){
      // signed in User
      let userName = this.refs.userName.value;
      let password = this.refs.password.value;
      try {
          axios.post('/login',{
            userName,
            password
          }).then((res) => {
              if(res.data.loggedIn){
                  this.props.login(res.data.user, res.data.loggedIn);
                  this.props.history.push('/secure');
              }
              else{
                this.props.history.push('/');
                 this.setState({
                  errors: {
                  invalidLogin: true
            }
        });
              }
              
          });
      }catch(e){
          console.error(`Caught: ${e}`)
      }
  }

    handleSignup(){
      this.props.history.push('/signup');
    };

  render(){
    let errorMessage = null;
    if(this.state.errors.invalidLogin){
      errorMessage = (<h4>Invalid Username or Password</h4>);
    }     
    return(
      <div>
        <h1>Welcome to Musiclist.</h1>
        <div>
            <div className="flexLogin">
              <label><input type='userName' autoComplete='on' placeholder='User Name' ref='userName' maxLength="50" required/></label>
              <label><input type='password' placeholder='Password' ref='password' maxLength="100" required/></label>
              <button type='button' onClick={this.handleClick}>Log In</button>
              {errorMessage}
            </div>
            <div><h2></h2></div>
            <div>
                <button type='button' onClick={this.handleSignup}>Sign Up</button>
                <Route path='/signup' render={(routeProps) => <Signup {...this.props} {...routeProps} />} />
            </div>
        </div>
      </div>
    );
  }
}
