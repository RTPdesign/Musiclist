import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import LoginPage from './LoginPage';
import UserPage from './UserPage';
import WishlistPage from './WishlistPage';


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
        <button className="btn waves-effect teal lighten-2 waves-light" onClick={this.handleUserHome}>Home
                    <i className="material-icons right">music_note</i></button>

        <button className="btn waves-effect teal lighten-2 waves-light right" onClick={this.handleLogout}>Log Out
                    <i className="material-icons right">close</i></button>
        <Switch>
          
          <Route path="/secure/wishlists/:wishlistId" render={(routeProps) => {
            let myWishlist = this.props.user.wishlists.filter(wishlist => wishlist._id === routeProps.match.params.wishlistId)[0];
            console.log(myWishlist);
            return <WishlistPage {...this.props} {...routeProps} wishlist={myWishlist} />
          }} />
          <Route path="/secure" render={() => <UserPage {...this.props} />} />
        </Switch>

      </div>
    );
  }
}