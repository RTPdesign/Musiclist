import React from 'react';
import axios from 'axios';

export default class Wishlists extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentWillMount() {
        axios.get('/wishlists').then(response => {
            //data will have an object of response.data.users list...
            console.log(response.data);
            if (response.data) {
                this.setState({
                    users: response.data
                });
            }
        });
    }

    handleChange(field, event) {
        this.setState({ [field]: event.target.value });
    }

    handleUserHome(){
        this.props.history.push('/secure');
    };

    render() {
        
        let wishList = [];
        if (this.state.users && this.state.users.length > 0) {
            wishList = this.state.users.map(user => {
                
                return (
                    <div key={user._id + '-user'}>
                         <h2><a href="#">{user.firstName + ' '} {user.lastName}</a></h2>
                         <h3>{user.email}<br/>
                             {user.age}<br/>
                             {user.gender}<br/>
                             {user.school}<br/>
                             {user.job}<br/>
                             </h3>
                    </div>
                )
            });
        };


        return (
            <div>
                <h3>Wishlists</h3>
                {wishList}
            </div>)
    }
}
