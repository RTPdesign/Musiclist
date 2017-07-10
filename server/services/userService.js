/**
 * Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
 */
import User from '../models/User';
import {Wishlist} from '../models/Wishlist';


export let createUser = (user, next) => {
    User.create(user, next);
};

export let login = (user, next) => {
    User.findOne({ userName: user.userName, password: user.password }, next);
};

export let checkUsers = (user, next) => {
    User.findOne({ userName: user.userName }, next);
};

export let pushWishlist = (userId, wishlist, next) => {
    wishlist = new Wishlist(wishlist); // you will need to do this line when  you add albums to a wishlist too.
    console.log(wishlist);
    User.update({ _id: userId }, { $push: { wishlists: wishlist } }, (error) => {
        console.log(error);
        User.findOne({ _id: userId }, (err, data) => {
            next(err, data);
        });
    });
}

export let deleteWishlist = (userId, wishlistId, next) => {
    User.findOne({ _id: userId }, (error, user) => {
        //console.log
        if (user && user.wishlists) {
            let cloneArray = user.wishlists.slice();
            
            user.wishlist.forEach(function (s, index) {
                if (s._id.toString() === wishlistId) {
                    cloneArray.splice(index, 1);
                    console.log(cloneArray.length + ': ' + user.wishlists.length);
                }
            });
            user.wishlists = cloneArray;
            //console.log(`saving user ${user}`);
            user.save((err, data) => {
                next(err, data);
            });
        }

    });
}

// export let getAllUsers = (next) => {
//     User.find({}, next);
// };





// export let updateTodoList = (userId, todoList, next) => {
//     // let taskList = todoList.map(task => {
//     //     return new Task({
//     //         description: task.description
//     //     });
//     // });
//     console.log(todoList);
//     User.update({_id: userId}, {todoList: todoList}, next);
// };

// export let getAllUserFriends = (userId, next) => {
//     // No-no... if objects become complex, this pyramid of doom grows significantly
//     // User.findOne({_id: userId}, (err, user) => { // return a singular object
//     //     Users.find({_id: {$in: user.friendListIds}}, (err, users) => {
//     //         // assuming everything went PERFECTLY............
//     //         next(err, users);
//     //     });
//     // });

//     // let findUser = new Promise((resolve, reject) => {
//     //     Mongo.find({_id: userId}, function(err, stuff){
//     //         if(stuff)resolve(null, user);
//     //         else reject(err, null)
//     //     });
//     // });

//     let promises = [];

//     promises.push(User.findOne({_id: userId}));
//     promises.push(new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(false){
//                 resolve("hello world!");
//             }
//             else {
//                 reject("error");
//             }
//         }, 50);
//     }));
//     promises.push(new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello world!");
//         }, 50);
//     }));
//     promises.push(new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello world!");
//         }, 50);
//     }));
//     Promise.all(promises).then((data) => {
//         console.log(data);
//         next(null, data);
//     }).catch(error => {
//         console.log(error);
//         next(error, null);
//     });
// };