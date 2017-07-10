import React from 'react';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import WishlistForm from './WishlistForm';
import Wishlists from './Wishlists';

export default class UserPage extends React.Component{
  constructor(){
    super();
    this.state = {
      wishlists: []
    };
    this.handleWishlist = this.handleWishlist.bind(this);
  }


    // componentWillMount() {
    //     axios.get('/wishlists').then(response => {
    //         this.props.loadWishlists(response.data);
    //         //data will have an object of response.data.users list...
    //         // console.log(response.data);
    //         // if (response.data) {
    //         //     this.setState({
    //         //         users: response.data
    //         //     });
    //         // }
    //     }).catch(function(err){
          
    //       debugger;
    //       console.log(err);
    //     });
    // }

  handleWishlist(){
    this.props.history.push('/secure/wishlist');
  };

  render(){

    return(
      <div>
        <h1>Welcome <a>{this.props.user.userName}</a></h1>
       
        <Link to="/secure/wishlist">Create a Wishlist</Link>
        <Route exact path='/secure' render={(routeProps) => <Wishlists {...this.props} {...routeProps} />} />
        <Route exact path="/secure/wishlist" render={(routeProps) => <WishlistForm {...this.props} {...routeProps} />}/>
        {/*<Link to={`${match.url}/wishlist`}>Wishlists</Link>*/}
        {/*<Status {...this.props}/>*/}
        
      </div>
    );
  }
}