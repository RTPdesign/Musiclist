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

 

    updateWishlist(){
        console.log(this.refs);
        let updatedTitle = this.refs[this.props.wishlist._id + '-wishlistform'].value;
        let userId = this.props.user._id;
        let wishlistId = this.props.wishlist._id;
        axios.put(`/users/${userId}/wishlists/${wishlistId}`, {title: updatedTitle, albums: [/*eventually when we have albums working*/]}).then((response) => {
            if(response.data){
                this.props.editWishlistTitle(wishlistId, updatedTitle);
            }
            else {
                console.error('EXCEPTIPN: ' + response);
            }
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
            inputElement = (<input ref={`${this.props.wishlist._id}-wishlistform`} className="yellow lighten-5" type="text" placeholder='Wishlist Name' maxLength="1000" required value={wishlistTitle} 
                        onChange={(event) => this.props.editWishlistTitle(this.props.wishlist._id, event.target.value)} />);
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