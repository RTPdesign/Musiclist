/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

// import {Task, TaskSchema} from './Task';

let userSchema = mongoose.Schema({
    userName:  { type: String, unique: true },
    password: { type: String, required: true },
});

export default mongoose.model('User', userSchema);