import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import LoginPage from './LoginPage';
import UserPage from './UserPage';


export default class Authenticate extends React.Component{
  constructor(){
    super();
    this.handleUserHome = this.handleUserHome.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleUserHome(){
    this.props.history.push('/secure');
  };

  handleLogout(){
    this.props.history.push('/');
    this.props.logout();
  };

  render(){
      
    return(
      <div>
        <button type="button" onClick={this.handleUserHome}>Home</button>
        <button type="button" onClick={this.handleLogout}>Log Out</button>
        <Route path="/secure" render={() => <UserPage {...this.props} />}/>
      </div>
    );
  }
}