const {Model,DataTypes,Sequelize} = require("sequelize");
const {PROFESIONALS_TABLE} = require("./Profesional");

const TURNERAS_TABLE = "turneras";

const TurnerasSchema = {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,   
        allowNull: false,     
    },
    idProfesional: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        references: {
            model: PROFESIONALS_TABLE,
            key: "id",
        }
    },
    cantidad: {
        allowNull: true,
        type: DataTypes.INTEGER,
    }
}

class Turnera extends Model{
    static associate(models){
        this.belongsTo(models.Profesional,{
            as: "turnosProfesional",
            foreignKey: "idProfesional"
        })
        this.belongsToMany(models.Turno,{
            as: "items",
            through: models.TurneraItem,
            foreignKey: "idTurnera", 
            otherKey: "IdTurno",
        });
       
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: TURNERAS_TABLE,
            modelName: "Turnera",
            timestamps: false,
        }
    }
}

module.exports = {TURNERAS_TABLE,TurnerasSchema,Turnera};