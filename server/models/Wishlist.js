/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let Album = {
    style: [{type: String}],
      thumb:{type: String},
      title:{type: String},
      country:{type: String},
      format: [],
      uri: {type: String},
      community: {
        want: {type: Number},
        have: {type: Number}
      },
      label: [{type: String}],
      catno: {type: String},
      year: {type: String},
      genre: [{type: String}],
      resource_url:{type: String},
      type: {type: String},
      id: {type: Number}
};
let wishlistSchema = mongoose.Schema({
    createdDate: {type: Date, default: Date.now},
    albums: [{type: Album}]
});

export let Wishlist =  mongoose.model('Wishlist', wishlistSchema);
export let WishlistSchema = wishlistSchema;