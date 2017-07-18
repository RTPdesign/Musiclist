import React from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

export default class Wishlists extends React.Component {
    constructor() {
        super();
        this.handleWishlistDelete = this.handleWishlistDelete.bind(this);
    }

    componentWillMount() {
       // code that we need before the component mounts
    }

    handleChange(field, event) {
        this.setState({ [field]: event.target.value });
    }

    handleUserHome(){
        this.props.history.push('/secure');
    };

    handleWishlistDelete(wishlistId) {
        let userId = this.props.user._id;
        axios.delete(`/users/${userId}/wishlists/${wishlistId}`).then(() => {
            this.props.deleteWishlist(wishlistId);
        });
    } 

    render() {
        let allWishlists = [];
        console.log(this.props.user.wishlists)
        console.log(this.props.user.wishlists.length);
        if (this.props.user.wishlists && this.props.user.wishlists.length > 0) {
            console.log('There are Wishlists');
            console.log(this.props.user.wishlists);
            allWishlists = this.props.user.wishlists.map(wishlist => (
                <li key={wishlist._id}>
                    <span className="waves-effect hoverable material-icons tiny left" onClick={() => this.handleWishlistDelete(wishlist._id)}>
                        cancel
                    </span>
                    <Link className="links container left" to={`/secure/wishlists/${wishlist._id}`}> {wishlist.title}</Link>

                </li>
            ));

        }
          
        return (
            <div>

                <div className="row">
                    <div className="col s2 m2 l2 xl2">
                        <ul>
                            {allWishlists}
                        </ul>
                    </div>
                </div>
            </div>);
      };
    
    }

            {/* */}


