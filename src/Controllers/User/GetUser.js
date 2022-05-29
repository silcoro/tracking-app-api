const{ User } = require('../../db')

const userBD = () => {
    let BD = User.findAll({attributes:{
        exclude:["createdAt","updatedAt"]
    }})
    .then((result) => {
        return result
    }).catch((err) => {
        console.log(err)
    });
    return BD
}



const GetUser = async (req,res,next) => {

   try {
        let BD = await userBD();
        let newBD = BD.map(e => {
            return{
                id: e.idUser,
                name:e.name,
                lastname:e.lastname,
                password:e.password,
                phone:e.phone,
                distritoId: e.distritoId,
                type:e.type
            }
        })

        res.status(200).json(newBD)

   } catch (error) {
       next(error)
   }

}

module.exports = {
    GetUser
}