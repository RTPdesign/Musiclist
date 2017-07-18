import React from 'react';
import axios from 'axios';

export default class WishlistTitle extends React.Component{
    constructor(){
        super();
        this.handleWishlistClick = this.handleWishlistClick.bind(this);
        this.handleWishlistUpdate = this.handleWishlistUpdate.bind(this);
    }
    componentWillMount(){
        axios.get('/albums').then((response) => {
            console.log(response);
            this.setState({
                ablums: response.data.albums
            });
        });
    }

    handleWishlistClick(index){
        this.props.updateWishlistClick(index);
    }

    handleWishlistUpdate(index){
        let updatedTitle = this.refs['wishlist'+index].value;
        let userId = this.props.user._id;
        axios.put(`/users/${userId}/wishlists/${index}`, {title: updatedTitle}).then(() => {
            this.props.updateWishlistTitle(index, updatedTitle);
        });
    }
    
    render() {
        let allWishlists = [];
        if (this.props.user.wishlists && this.props.user.wishlists.length > 0) {
            allWishlists = this.props.user.wishlists.map((wishlist, index) => {
                if(wishlist.showEdit) {
                    return (<input onBlur={() => this.handleWishlistUpdate(index)} ref={'wishlist'+index} placeholder={wishlist.title}/>);
                }
                else {
                    return (
                        <div>
                            <li onClick={() => this.handleWishlistClick(index)} key={wishlist._id}> {wishlist.title}</li>

                        </div>
                    );
                }
            })
        }
    }
}