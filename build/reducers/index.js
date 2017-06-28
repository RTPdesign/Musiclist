// Combines multiple reducers to help reduce the changes of State in the app

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import loggedIn from './loggedIn';
import wishlist from './wishlist';

const rootReducer = combineReducers({user, loggedIn, wishlist, routing: routerReducer});

export default rootReducer;