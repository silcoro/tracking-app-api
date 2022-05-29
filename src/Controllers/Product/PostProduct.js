// const bcrypt = require('bcrypt');
const { Product } = require('../../db');

const PostProduct = async ( req, res, next) =>{
    try {
        
        let {
            idProd,
            cargo,
            administrador,
            // empleado,
            // direccion,
            fechaLLegada ,
            // fechaSalida,
            // distritoId
        } = req.body;

       
        let [newProduct, created] = await Product.findOrCreate({
            where:{cargo},
            defaults:{
                idProd,
                administrador,
                // empleado,
                // direccion,
                fechaLLegada,
                // fechaSalida,
                // distritoId,
                estado:1,
            }
        })
         res.status(200).json({created: created, newProduct});

    } catch (error) {
        next(error)
    }
}

module.exports = {
    PostProduct
}