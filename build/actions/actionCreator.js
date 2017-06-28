// Blueprint of what each event looks like

export let addUser = (user, errors) => {
    return {
        type: 'ADD_USER',
        user,
        errors
    };
}

export let login = (user, loggedIn) => {
    console.log('dispatch LOGIN');
    return {
        type: 'LOGIN',
        user,
        loggedIn
    };
}

export let logout = () => {
    console.log('dispatch LOGOUT');
    return {
        type: 'LOGOUT',
    };
}

export let createWishlist = (userId, name) => {
    return {
        type: 'CREATE_WISHLIST',
        userId,
        name
    };
}

export let fetchWishlist = (listId) => {
    return {
        type: 'FETCH_WISHLIST',
        listId
    };
}

export let deleteWishlist = (listId) => {
    return {
        type: 'DELETE_WISHLIST',
        listId
    };
}

export let addToList = (item) => {
    return {
        type: 'ADD_TO_LIST',
        item
    };
}

export let removeFromList = (item) => {
    return {
        type: 'REMOVE_FROM_LIST',
        item
    };
}