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
            return Object.assign({}, state, {wishlists: wishlist(state.wishlists, action)});
        case 'ADD_USER':
            return {...state, ...action.user};
        default:
            return state;
    }
}

let wishlist = (state = [], action) =>{
    switch(action.type){
        case 'LOAD_WISHLISTS':
        return state;
        default:
        return state;
    }
}

export default user;