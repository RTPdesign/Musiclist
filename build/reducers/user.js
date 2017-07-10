// a reducer takes in two things:
// 1. the action
// 2. copy of current state
// and then returns the new state
// it is a pure function

let user = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
        console.log('Logged in a User', action);
            return {...state, ...action.user};
        case 'LOGOUT':
            return {
                _id: null,
                userName: null,
                wishlists: []
            };
        case 'LOAD_WISHLISTS':
            let myNewState = Object.assign({}, state, {wishlists: wishlist(state.wishlists, action)});
            // debugger;
            console.log(myNewState);
            return myNewState;
        case 'ADD_USER':
            return {...state, ...action.user};
        default:
            return state;
    }
}

let wishlist = (state = [], action) => {
    switch(action.type){
        case 'CREATE_WISHLIST':
        console.log('Created Wishlist', action);
        return [...state, ...action.userId];

        case 'FETCH_WISHLIST':
        debugger;
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