const {Model,DataTypes,Sequelize} = require("sequelize");
const { USERS_TABLE } = require("./User");
const {TURNERAS_TABLE} = require("./Turnera");

const TURNOS_TABLE = "turnos";

const TurnosSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onUpdate: "cascade",
        onDelete: "set null",
        references: {
            model: USERS_TABLE,
            key: "id",
        }
    },
    horario: {
        type: DataTypes.DATE,
        allowNull: false,
    },
   
}

class Turno extends Model{
    static associate (models){  
        this.belongsToMany(models.Turnera,{
            as: "turneras",
            through: models.TurneraItem,
            foreignKey: "idTurnera", 
            otherKey: "IdTurno",
        });
    }
        

    static config(sequelize){
        return{
            sequelize,
            tableName: TURNOS_TABLE,
            modelName: "Turno",
            timestamps: false,
        }
    }
}

module.exports = {TURNOS_TABLE,TurnosSchema,Turno};