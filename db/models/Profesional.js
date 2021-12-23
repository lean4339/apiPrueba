const {Model,DataTypes, Sequelize} = require("sequelize");

const PROFESIONALS_TABLE = "profesionales";

const ProfesionalsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },  
    username: {
        allowNull: false,
        type: DataTypes.STRING
    }, 
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    image_url: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    profesionId: {
        allowNull: true,
        type: DataTypes.INTEGER,
    }
    
}

class Profesional extends Model{
    static associate(models){
        this.hasMany(models.Turnera,{
            as: "turnos profesional",
            foreignKey: "idProfesional"
        })
    }
   
    static config(sequelize){
        return {
            sequelize,
            tableName: PROFESIONALS_TABLE,
            modelName: "Profesional",
            timestamps: false
        }
    }
}
module.exports = {PROFESIONALS_TABLE, ProfesionalsSchema, Profesional};