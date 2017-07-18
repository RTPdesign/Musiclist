// /**
//  * Services
//  * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
//  */
// import {Wishlist} from '../models/Wishlist';

// export let createWishlist = (userId, wishlist, next) => {
//     Wishlist.create(wishlist, next);
// };

// export let deleteWishlist = (wishlist, next) => {
//     Wishlist.findOneAndRemove(wishlist, next);
// };

// export let getWishlists = (next) => {
//     Wishlist.find({}, next);
// };