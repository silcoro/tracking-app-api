const{ Product } = require('../../db')

const ProductBD = () => {
    let BD = Product.findAll({attributes:{
        exclude:["createdAt","updatedAt"]
    }})
    .then((result) => {
        return result
    }).catch((err) => {
        console.log(err)
    });
    return BD
}



const GetProduct = async (req,res,next) => {

   try {
        let BD = await ProductBD();
        let newBD = BD.map(e => {
            return{
                id: e.idProd,
                cargo:e.cargo,
                administrador:e.administrador,
                empleado:e.empleado,
                direccion:e.direccion,
                fechaLLegada:e.fechaLLegada,
                fechaSalida: e.fechaSalida,
                distritoId:e.distritoId,
                estado:e.estado
            }
        })

        res.status(200).json(newBD)

   } catch (error) {
       next(error)
   }

}

module.exports = {
    GetProduct
}