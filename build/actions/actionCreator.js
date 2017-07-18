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

export let loadWishlists = (wishlists) => {
    console.log('dispatch load wishlists');
    return {
        type: 'LOAD_WISHLISTS',
        wishlists
    };
}

export let createWishlist = (wishlist) => {
    return {
        type: 'CREATE_WISHLIST',
        wishlist
    };
}

export let updateWishlistTitle = (index, updateWishlistTitle) => {
    return {
        type: 'UPDATE_WISHLIST_TITLE',
        index,
        title: updateWishlistTitle
    };
}

export let editWishlistTitle = (wishistId, updateWishlistTitle) => {
    console.log('editing wishlist title... to...' + updateWishlistTitle);
    return {
        type: 'EDIT_WISHLIST_TITLE',
        wishlistId: wishistId,
        title: updateWishlistTitle
    };
}

export let updateWishlistClick = (index) => {
    return {
        type: 'UPDATE_WISHLIST_CLICK',
        index
    };
}

export let deleteWishlist = (wishlistId) => {
    return {
        type: 'DELETE_WISHLIST',
        wishlistId
    };
}

export let fetchWishlist = (listId) => {
    return {
        type: 'FETCH_WISHLIST',
        listId
    };
}

export let loadAlbums = (albums) => {
    console.log('dispatch load albums');
    return {
        type: 'LOAD_ALBUMS',
        albums
    };
}

export let addAlbums = (albums) => {
    return {
        type: 'ADD_ALBUMS',
        albums
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