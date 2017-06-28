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
            wishLists: []
        };

        case 'ADD_USER':
        return {...state, ...action.user};
        
        default:
        return state;
    }
}

export default user;