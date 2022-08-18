const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const createUser = new Schema({
    name: { type: String, required: true, trim: true },
    mail: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now }
});

const userModel = mongoose.model('User', createUser);

module.exports = userModel;