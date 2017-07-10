/**
 * Routing file
 * This file holds all the possible routes our app can make. It also has a reference to services to help keep logic out of this layer. 
 */
'use strict';
// import {createTask} from '../services/taskService';
import * as UserService from '../services/userService';
import axios from 'axios';

export default (app) => {

    // We can create an API by this.
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/users', (req, res) => {
        console.log(req.body);
        UserService.createUser(req.body, (err, user) => {
            let response;
            if (!err && user) {
                response = {
                    user: {
                        _id: user._id,
                        userName: user.userName,
                        wishlists: user.wishlists
                    },
                    loggedIn: true
                };
            }
            else {
                response = { error: 'User can not be created. Please try again' };
            }
            res.json(response);
        });
    });

    app.post('/login', (req, res) => {
        console.log(req.body);
        UserService.login(req.body, (err, user) => {
            let response;
            if (!err && user) {
                response = {
                    user: {
                        _id: user._id,
                        userName: user.userName,
                        wishlists: user.wishlists
                    },
                    loggedIn: true
                };
            }
            else {
                response = { error: 'Password is incorrect' };
            }
            res.json(response);
        });
    });

    app.get('/wishlists', (req, res) => {
        res.json([{title: 'Hello', _id: 123, albums: []}])
    });

    app.put('/users/:userId/wishlists', (req, res) => {

        console.log(req.params, req.body);
        UserService.pushWishlist(req.params.userId, req.body, (err, user) => {
            let response;
            if (!err && user) {
                response = user;
            }
            else {
                response = { error: 'List can not be created.' };
            }
            res.json(response);
        });
    });

    app.delete('/users/:userId/wishlists/:id', (req, res) => {
        UserService.deleteWishlist(req.params.userId, req.params.id, (err, user) => {
            let response;
            if (!err && user) {
                response = user;
            }
            else {
                response = { error: 'List can not be deleted.' };
            }
            res.json(response);
        });
    });

    app.get('/albums', (req, res) => {
        axios.get('https://api.discogs.com/database/search?q=Nirvana&type=release&key=DDPqQlwxZjDiBRlxRCty&secret=aHzyGTOEEordvSFvILojanlGrOfBCzZr').then((response) => {
            res.json({albums: response.data.results});
        });
    });

    app.post('/albums', (req, res) => {
        axios.post('https://api.discogs.com/database/search?q=Nirvana&type=release&key=DDPqQlwxZjDiBRlxRCty&secret=aHzyGTOEEordvSFvILojanlGrOfBCzZr').then((response) => {
            res.json({albums: response.data.results});
        });
    });

    app.delete('/albums', (req, res) => {
        axios.delete('https://api.discogs.com/database/search?q=Nirvana&type=release&key=DDPqQlwxZjDiBRlxRCty&secret=aHzyGTOEEordvSFvILojanlGrOfBCzZr').then((response) => {
            res.json({albums: response.data.results});
        });
    });    
    // app.get('/users', (req, res) => {
    //     UserService.getAllUsers((err, users) => {
    //         if(users){
    //             // console.log('USERS! : ', users); // debugging purposes
    //             res.json({users});
    //         }
    //         else {
    //             res.statusCode(400);
    //             res.send('Error!');
    //         }
    //     });
    // });

    // app.post('/task', (req, res) => {
    //     createTask(req.body, (err, data) => {
    //         if(!err){
    //             console.log(data);
    //             res.json(data);
    //         }
    //         else {
    //             res.json(err);
    //         }
    //     });
    // });

    // app.put('/users/:id/task', (req, res) => {
    //     console.log('Is our ID there?', req.params.id);
    //     console.log('Is our correct task there?', req.body);
    //     UserService.push(req.params.id, req.body, (err, modifiedObject) => {
    //         if(!err){
    //             res.json(modifiedObject);
    //         }
    //         else {
    //             res.json({error: 'There was an error!', data: null});
    //         }
    //     });
    // });

    // app.put('/users/:id/todoList', (req, res) => {
    //     console.log('Is our ID there?', req.params.id);
    //     console.log('Is our correct todoList there?', req.body);
    //     UserService.updateTodoList(req.params.id, req.body, (err, modifiedObject) => {
    //         if(!err){
    //             res.json(modifiedObject);
    //         }
    //         else {
    //             res.json({error: 'There was an error!', data: null});
    //         }
    //     });
    // });

    // app.get('/users/:id/test', (req, res) => {
    //     console.log('Is our ID there?', req.params.id);
    //     UserService.getAllUserFriends(req.params.id, (err, data) => {
    //         res.json({error: err, data: data});
    //     });
    // });

    

}