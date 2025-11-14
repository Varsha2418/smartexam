const UserService = require('../services/user.services');

exports.registerUser = async(req,res,next) => {
    try {
        const {email,password,name} = req.body;
        const SucessRes = await UserService.registerUser(email,password,name);
        res.json({statusUser:true,Success:'user Registered Sucessfully' } );
 
    } catch (err) {
        throw err;
    }  } 