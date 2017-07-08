// Combines multiple reducers to help reduce the changes of State in the app

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import loggedIn from './loggedIn';

const rootReducer = combineReducers({user, loggedIn, routing: routerReducer});

export default rootReducer;