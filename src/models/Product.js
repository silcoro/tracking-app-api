
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('product', {
        idProd:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement :true
        },
        cargo:{
            type: DataTypes.STRING
        },
        administrador: {
            type: DataTypes.STRING
        },
        empleado: {
            type: DataTypes.STRING
        },
        direccion: {
            type: DataTypes.STRING
        },
        fechaLLegada: {
            type: DataTypes.STRING,
        },
        fechaSalida: {
            type: DataTypes.STRING,
        },
        distritoId:{
            type:DataTypes.INTEGER,
        },
        estado:{
            type: DataTypes.INTEGER,
        },      
    }
    ,
    // {
    //     timestamps:false
    // }
    );
};
//type, name, email, password, phone, image, address