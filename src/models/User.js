
const { DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('user', {
        idUser:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement :true
        },
        type:{
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },

        lastname: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            required:true,
            unique:true,
            validate:{
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },

        phone:{
            type: DataTypes.INTEGER,
            allowNull:false
        },

        distritoId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
      
    }
    ,
    // {
    //     timestamps:false
    // }
    );
};
//type, name, email, password, phone, image, address