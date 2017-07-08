import React from 'react';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import WishlistForm from './WishlistForm';

export default class UserPage extends React.Component{
  constructor(){
    super();
    this.state = {
      wishlists: []
    };
    this.handleWishlist = this.handleWishlist.bind(this);
  }


    componentWillMount() {
        axios.get('/wishlists').then(response => {
            this.props.loadWishlists(response.data);
            //data will have an object of response.data.users list...
            // console.log(response.data);
            // if (response.data) {
            //     this.setState({
            //         users: response.data
            //     });
            // }
        }).catch(function(err){
          
          debugger;
          console.log(err);
        });
    }

  handleWishlist(){
    this.props.history.push('/secure/wishlist');
  };

  renderWishlists(){
    let allWishlists = [];
                  console.log(this.props.user, this.props.user.wishlists, this.props.user.wishlists.length);
    if(this.props.user.wishlists && this.props.user.wishlists.length > 0){
      allWishlists = this.props.user.wishlists.map(wishlist => {
        
        return (            <div>
                <h2>Users TodoList</h2>
                <ul>
                {this.props.wishlists.map(task => (
                    <li key={`${task.id}-task`}>
                        {task.description}
                    </li>
                ))}
                </ul>
            </div>);
      });
    }
    return allWishlists;
  }

  render(){
    console.log(this.props);
      let myWishlists = this.renderWishlists();
    return(
      <div>
        <h1>Welcome <a>{this.props.user.userName}</a></h1><br/>
        <h2>Wishlists</h2>
        {myWishlists}
        <Link to="/secure/wishlist">Create a Wishlist</Link>
        <Route path='/secure/wishlist/:id' render={(routeProps) => <Wishlists {...this.props} {...routeProps} />} />
        <Route exact path="/secure/wishlist" render={(routeProps) => <WishlistForm {...this.props} {...routeProps} />}/>
        {/*<Link to={`${match.url}/wishlist`}>Wishlists</Link>*/}
        {/*<Status {...this.props}/>*/}
        
      </div>
    );
  }
}