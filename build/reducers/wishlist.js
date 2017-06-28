let wishlist = (state = [], action) => {
    switch(action.type){
        case 'CREATE_WISHLIST':
        console.log('Created Wishlist', action);
        return {...state, ...action.userId};

        case 'FETCH_WISHLIST':
        console.log('Gets Wishlist', action);
        return {...state, ...action.listId};
        
        case 'DELETE_WISHLIST':
        console.log('Delete Wishlist', action);
        return {...state, ...action.listId};
        
        case 'ADD_TO_LIST':
        console.log('Added album to Wishlist', action);
        return {...state, ...action.item};
        
        case 'REMOVE_FROM_LIST':
        console.log('Removes album from Wishlist', action);
        return {...state, ...action.item};

        default:
        return state;
    }
}

export default wishlist;