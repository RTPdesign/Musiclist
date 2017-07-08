import React from 'react';
import axios from 'axios';

export default class WishlistForm extends React.Component{

    constructor(){
        super();
        this.state = {
            albums: []
        };
    }
    componentWillMount(){
        axios.get('/albums').then((response) => {
            console.log(response);
            this.setState({
                ablums: response.data.albums
            });
        });
    }
    renderAlbums(){
        return this.state.albums.map(ablum => {
            return (<div>{album.title}</div>);
        });
    }
    render(){
        return(
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" ref="title" name="title" />
                <h5>Choose albums to add to your wishlist</h5>
                {this.renderAlbums()}
            </div>
        )
    }
}