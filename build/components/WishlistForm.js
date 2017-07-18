import React from 'react';
import axios from 'axios';

import AlbumList from './AlbumList';

export default class WishlistForm extends React.Component{
    constructor() {
        super();
        this.submitWishlist = this.submitWishlist.bind(this);
        this.updateWishlist = this.updateWishlist.bind(this);
    }

    componentWillMount(){

        axios.get('/albums').then((response) => {
            // this.props.loadAlbums(response.data);
            console.log(response);
            this.setState({
                ablums: response.data.albums
            });
        });
    }

    submitWishlist() {
        let title = this.refs.title.value;
        let userId = this.props.user._id;
        try {
            axios.post(`/users/${userId}/wishlists`, {
                title
            }).then(res => {
                //   debugger;
                this.props.createWishlist(res.data);
                console.log('We have created a wishlist', res);
            });
        } catch (e) {
            console.error(`Caught: ${e}`)
        }
    }

    updateWishlist(index){
        console.log(this.refs);
        let updatedTitle = this.refs['wishlist-'+index].value;
        let userId = this.props.user._id;
        axios.put(`/users/${userId}/wishlists/${index}`, {wishlist: this.props.wishlist}).then(() => {
            this.props.updateWishlistTitle(index, updatedTitle);
        });
    }

    render(){ 
        let buttonText = 'Create Wishlist';
        let dynamicAction = this.submitWishlist;
        let wishlistTitle = '';
        let albumList = null;
        let inputElement = (<input className="yellow lighten-5" type="text" placeholder='Wishlist Name' ref="title" maxLength="1000" required/>);

        if(this.props.wishlist && this.props.wishlist._id){
            buttonText = 'Save';
            dynamicAction = this.updateWishlist;
            wishlistTitle = this.props.wishlist.title;
            albumList = <AlbumList albums={this.props.wishlist.albums} />
            inputElement = (<input className="yellow lighten-5" type="text" placeholder='Wishlist Name' maxLength="1000" required value={wishlistTitle} 
                        onChange={(event) => this.props.editWishlistTitle(this.props.wishlist, event.target.value)} />);
        }

        return (

            <div className="card-content">
                <label className="in">
                    {inputElement}
                </label>
                <div className="card-content">
                    <button className="btn waves-effect teal lighten-2 waves-light right" type="submit" name="action" onClick={() => dynamicAction()}>
                        {buttonText} <i className="material-icons right">library_music</i>
                    </button>
                    {albumList}
                </div>
            </div>
        )
    }
}