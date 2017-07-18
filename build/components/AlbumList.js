import React from 'react';
import axios from 'axios';

export default class AlbumList extends React.Component {
    constructor() {
        super();
        this.addAlbums = this.addAlbums.bind(this);
        // this.renderAlbums = this.renderAlbums.bind(this);
    }

    // componentWillMount() {
    //     axios.get('/albums').then(response => {
    //         console.log(response);
    //         this.props.loadAlbums(response.data.albums);
    //         });
    // }

    addAlbums() {

    }

    // renderAlbums(){
    //     return this.state.albums.map(album => {
    //         return (<div>{album.title}</div>);
    //     });
    // }


    render(){


        return (
            <div>
                {/*<label htmlFor="title">Title</label>
                <input id="title" type="text" ref="title" name="title" />
                
                {this.renderAlbums()}*/}
                <button className="btn waves-effect teal lighten-2 waves-light left" onClick={this.addAlbums()}>Add albums
                      <i className="material-icons right">album</i></button>


            </div>
        )
    }
}