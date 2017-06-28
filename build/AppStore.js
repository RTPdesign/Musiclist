/**
 * The AppStore is the foundation to Redux. Here we define what the default application state looks like. 
 * Here I am creating default data and assigning it to the createStore() method.
 * We also hook up redux debugging with our extension, redux-devtools-extension. 
 * We pass in all of the reducers to this single store, so before data can be held inside our store, it must go through all the reducers. 
 */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const defaultState = {
    user: {
        _id: '',
        userName: '',
        wishLists: '',
    },
    loggedIn: false,
};

const store = createStore(rootReducer, defaultState, composeWithDevTools());

export default store;