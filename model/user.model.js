const mongoose = require('mongoose');

const database = require('../configuration/database');

const { Schema } = mongoose;

const userSchema = new Schema({ 
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true   
    },
    password: {
        type: String,
        required: true
    },
    name: { type: String , required: true },

}, { timestamps: true });   

const User = database.model('User', userSchema);

module.exports = User;

   