import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreator';
import LoginPage from './LoginPage';
import Authenticate from './Authenticate';
// import Todo from './Todo';
// import UserTodoList from './UserTodoList';

// Redux requires to give a correct mapping of what State should ultimately look like. State is how React and Redux work. 
// The method below is assigning state to an object, which will represent what props will look like as it descends through the app.
let mapStateToProps = (state) => {
    return {
        user: state.user,
        loggedIn: state.loggedIn
    }
};

// Binds actions to the dispatch object. The dispatch object is the lifecycle of Redux that gets called whenever there is a state change.
// When it receives an event, it executes the method that we implemented in our actionCreator module.
let mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

class App extends React.Component {
    constructor(){
        super();
    }
    render(){
        let loggedIn = this.props.loggedIn;
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' render={(routeProps) => {
                        if(!loggedIn){
                            return <LoginPage {...this.props} {...routeProps} />
                        }
                        else {
                            return <Redirect to="/secure" />
                        }
                        }} />
                    <Route path="/secure" render={(routeProps) => {
                        if(loggedIn){
                            return <Authenticate {...this.props} {...routeProps} />
                        }
                        else{
                            return <Redirect to="/"/>
                        }
                    }}/>
                </div>
            </BrowserRouter>
        );
    }
}

// connect() is used to inject props directly into a container component.
let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
