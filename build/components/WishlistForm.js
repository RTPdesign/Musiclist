import React from 'react';
import AlbumList from './AlbumList';
import axios from 'axios';

export default class WishlistForm extends React.Component{
    constructor() {
        super();
        this.submitWishlist = this.submitWishlist.bind(this);
    }

    componentWillMount(){
         axios.get('/albums').then((response) => {
            // this.props.loadAlbums;
         });
    }

  submitWishlist() {
      let title = this.refs.title.value;
      let userId = this.props.user._id;
      try {
        axios.put(`/users/${userId}/wishlists`, {
          title
        }).then(res => {
          console.log('We have created a wishlist', res);

          this.props.createWishlist(res.data.user);
        });
      } catch (e) {
        console.error(`Caught: ${e}`)
      }
  }

    render(){
        return(
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" ref="title" name="title" />
                <button className="btn waves-effect orange waves-light" type="submit" name="action" onClick={this.submitWishlist}>Submit
                    <i className="material-icons right">send</i>
                </button>
                <AlbumList />
            </div>
        )
    }
}