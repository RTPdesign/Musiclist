import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import WishlistForm from './WishlistForm';
import Wishlists from './Wishlists';

export default class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      wishlists: []
    };
    this.handleWishlist = this.handleWishlist.bind(this);
  }

  handleWishlist() {
    this.props.history.push('/secure/wishlist');
  };

  handleClickDelete(id, event) {
    let remove = this.refs.remove;
    console.log(id)
    axios.delete('/api/person/' + id, {})
      .then(res => {
        this.props.deleteWishlist(res.data._id);
        console.log('Delete a Wishlist with ID ', res.data._id);
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {

    return (
      <div className="card yellow lighten-5" >
        <div className="card-content">
          <span className="card-title large material-icons center"><h1>{this.props.user.userName}'s Wishlists</h1>music_note</span>
          <Route path='/secure' render={(routeProps) => <Wishlists {...this.props} {...routeProps} />} /><br />

          <button className="btn waves-effect teal lighten-2 waves-light" onClick={this.handleWishlist}>Create a Wishlist
                    <i className="material-icons right">expand_more</i></button><br /><br />

          <Route exact path="/secure/wishlist" render={(routeProps) => <WishlistForm {...this.props} {...routeProps} />} />
        </div>
      </div>
    );
  }
}

      {/*  

          render() {
        let allWishlists = [];
        console.log(this.props.user.wishlists)
        console.log(this.props.user.wishlists.length);
    if(this.props.user.wishlists && this.props.user.wishlists.length > 0){
        console.log('There are Wishlists')
      allWishlists = this.props.user.wishlists.map(wishlist => (
        <li key={wishlist._id}> 
            <Link to={`/secure/wishlists/${wishlist._id}`}> {wishlist.title}</Link>
            <span className="waves-effect hoverable material-icons" onClick={() => this.handleWishlistDelete(wishlist._id)}>
                close
            </span>
        </li>
    ));*/}