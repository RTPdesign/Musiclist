// a reducer takes in two things:
// 1. the action
// 2. copy of current state
// and then returns the new state
// it is a pure function

let user = (state = {}, action) => {
    let myNewState = null;
    switch(action.type){
        case 'LOGIN':
        console.log('Logged in a User', action);
            return {...action.user};
        case 'LOGOUT':
            return {
                _id: null,
                userName: null,
                wishlists: []
            };
        case 'LOAD_WISHLISTS':
            myNewState = Object.assign({}, state, {wishlists: wishlist(state.wishlists, action)});
            // debugger;
            console.log(myNewState);
            return myNewState;
        case 'CREATE_WISHLIST':
            myNewState = Object.assign({}, state, {wishlists: wishlist(state.wishlists, action)});
            return myNewState;
        case 'UPDATE_WISHLIST_CLICK':
            myNewState = Object.assign({}, state);
            myNewState.wishlists[action.index].showEdit = true;
            return myNewState;
        case 'UPDATE_WISHLIST_TITLE':
            myNewState = Object.assign({}, state);
            myNewState.wishlists[action.index].showEdit = false;
            myNewState.wishlists[action.index].title = action.title;
            return myNewState;
        case 'EDIT_WISHLIST_TITLE':
            myNewState = Object.assign({}, state);
            myNewState.wishlists.forEach(wishlist => {
                if(wishlist._id === action.wishlistId){
                    wishlist.title = action.title;
                }
            });
            return myNewState;
        case 'DELETE_WISHLIST':
            console.log('Delete Wishlist', action);
            myNewState = Object.assign({}, state);
            let wishlists = myNewState.wishlists.slice();
            myNewState.wishlists.forEach((wishlist, index) => {
                if (wishlist._id === action.wishlistId) {
                    wishlists.splice(index, 1);
                }
            });
            myNewState.wishlists = wishlists;
            return myNewState;
        case 'ADD_USER':
            return {...state, ...action.user};
        case 'LOAD_ALBUMS':
            myNewState = Object.assign({}, state, { albums: albums(state.albums, action) });
            // debugger;
            console.log(myNewState);
            return myNewState;
        case 'ADD_ALBUMS':
            myNewState = Object.assign({}, state, { albums: albums(state.albums, action) });
            // debugger;
            console.log(myNewState);
            return myNewState;
        default:
            return state;
    }
}

let wishlist = (state = [], action) => {
    switch(action.type){
        case 'CREATE_WISHLIST':
        console.log('Created Wishlist', action);
        return [...state, action.wishlist];

        case 'FETCH_WISHLIST':
        // debugger;
        console.log('Gets Wishlist', action);
        return [...state, ...action.listId];
        
        case 'DELETE_WISHLIST':
        console.log('Delete Wishlist', action);
        return [...state, ...action.listId];
        
        case 'ADD_TO_LIST':
        console.log('Added album to Wishlist', action);
        return [...state, ...action.item];
        
        case 'REMOVE_FROM_LIST':
        console.log('Removes album from Wishlist', action);
        return [...state, ...action.item];

        default:
        return state;
    }
}

export default user;