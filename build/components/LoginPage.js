import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import Signup from './Signup';

export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleRTP = this.handleRTP.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

    this.state = {
      errors: {
        invalidLogin: false
      }
    }
  }

  handleClick(event) {
    // signed in User
    let userName = this.refs.userName.value;
    let password = this.refs.password.value;
    try {
      axios.post('/login', {
        userName,
        password
      }).then((res) => {
        if (res.data.loggedIn) {
          this.props.login(res.data.user, res.data.loggedIn);
          this.props.history.push('/secure');
        }
        else {
          this.props.history.push('/');
          this.setState({
            errors: {
              invalidLogin: true
            }
          });
        }

      });
    } catch (e) {
      console.error(`Caught: ${e}`)
    }
  }

  handleRTP() {
    location.replace("http://rtpdesign.com");
  };

  handleSignup() {
    this.props.history.push('/signup');
  };

  render() {
    let errorMessage = null;
    if (this.state.errors.invalidLogin) {
      errorMessage = (<h4>Invalid Username or Password</h4>);
    }
    return (
      <div className="card yellow lighten-5" >
        <div className="card-content">
          <h1>Welcome to Musiclist</h1>
          <span className="card-title waves-effect material-icons center" onClick={this.handleRTP}>
                        remove_red_eye favorite music_note
                    </span>
          <label className="in"><input type='text' autoComplete='on' placeholder='User Name' ref='userName' maxLength="50" required /></label>
          <label className="in"><input type='password' placeholder='Password' ref='password' maxLength="100" required /></label>
          <button className="btn waves-effect teal lighten-2 waves-light" onClick={this.handleClick}>Log In
                    <i className="material-icons right">music_note</i></button>

          {errorMessage}

          <button className="btn waves-effect teal lighten-2 waves-light right" onClick={this.handleSignup}>Sign Up
                      <i className="material-icons right">expand_more</i></button>
          <Route path='/signup' render={(routeProps) => <Signup {...this.props} {...routeProps} />} />

        </div>

        {/*<div className="card-reveal">
          <span className="card-title orange-text text-darken-4">Sign Up<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>*/}
      </div>



    );
  }
}


{/*



            <div className="row">
        <div className="col s12 m60">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card yellow large">
            <div className="card-content green-text">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="https://68.media.tumblr.com/b1a0ea765a3b771e7318addbead23e55/tumblr_oosglvwr9z1r47bczo1_400.gif" />
        </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4"><h1>Welcome to Musiclist.</h1><i className="material-icons right">expand_more</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
      </div>


      <div> 
          <h1>Welcome to Musiclist.</h1>
        <div className="row">
          <div className="col x16"> 
            <div>
                <div className="flexLogin">
                  <label><input type='text' autoComplete='on' placeholder='User Name' ref='userName' maxLength="50" required/></label>
                  <label><input  type='password' placeholder='Password' ref='password' maxLength="100" required/></label>
                  <button className="btn waves-effect waves-light" onClick={this.handleClick}>Log In
                    <i className="material-icons right">music_note</i></button>


                  {errorMessage}
                </div>

                <div>
                    <button className="btn waves-effect waves-light" onClick={this.handleSignup}>Sign Up
                      <i className="material-icons right">queue_music</i></button>
                    <Route path='/signup' render={(routeProps) => <Signup {...this.props} {...routeProps} />} />
                </div>
            </div>
          </div> 
        </div> 
      </div>*/}