const User = require('../model/user.model');


class UserService{
    static async registerUser(email,password,name){
        try{
            const createuser = new User({ email,password,name});
            return await createuser.save();
        } catch (err){
            throw err;
        }
}}

module.exports = UserService;