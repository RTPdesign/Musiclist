import React from 'react';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

export default class UserPage extends React.Component{
  constructor(){
    super();
    
    this.handleWishlist = this.handleWishlist.bind(this);
  }

  //   componentWillMount() {
  //     axios.get('/wishlists').then(response => {
  //         //data will have an object of response.data.users list...
  //         console.log(response.data);
  //         if (response.data) {
  //             this.setState({
  //                 users: response.data
  //             });
  //         }
  //     });

  // }

  handleWishlist(){
    this.props.history.push('/secure/wishlist');
  };

  render(){
    console.log(this.props);
      
    return(
      <div>
        <h1>Welcome <a>{this.props.user.userName}</a></h1><br/>
        <h2>Wishlists</h2>
        <Route path='/secure/whishlist' render={(routeProps) => <Wishlists {...this.props} {...routeProps} />} />
        {/*<Link to={`${match.url}/wishlist`}>Wishlists</Link>*/}
        {/*<Status {...this.props}/>*/}
        
      </div>
    );
  }
}