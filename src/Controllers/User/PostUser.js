// const bcrypt = require('bcrypt');
const { User } = require('../../db');

const PostUser = async ( req, res, next) =>{
    try {
        
        let { idUser, name, lastname, type , email, password, phone, distritoId} = req.body;

       
        let [newUser, created] = await User.findOrCreate({
            where:{email},
            defaults:{
                idUser,
                type,
                password,
                phone,
                name,
                lastname,
                distritoId
            }
        })
         res.status(200).json({created: created, newUser});

    } catch (error) {
        next(error)
    }
}

module.exports = {
    PostUser
}