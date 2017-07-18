import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

import WishlistForm from './WishlistForm';

export default class WishlistPage extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
        <div className="card yellow lighten-5" >
            <div className="card-content">
                <h1>Edit {this.props.wishlist.title} Wishlist</h1>
                <WishlistForm wishlist={this.props.wishlist} {...this.props}/>
            </div>
        </div>
        );
    }
}