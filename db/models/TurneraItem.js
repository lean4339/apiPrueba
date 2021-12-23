const {Model,DataTypes,Sequelize} = require("sequelize");
const { TURNOS_TABLE } = require("./Turno");
const {TURNERAS_TABLE} = require("./Turnera");

const TURNERASITEMS_TABLE = "turnerasItem";

const TurneraItemsSchema = {
    id:{
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,        
    },
    idTurnera: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
            model: TURNERAS_TABLE,
            key: "id"
        }
    },
    IdTurno: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: TURNOS_TABLE,
            key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    }
}

class TurneraItem extends Model{
    static associate(){
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: TURNERASITEMS_TABLE,
            modelName: "TurneraItem",
            timestamps: false,
        }
    }
}

module.exports = {TURNERASITEMS_TABLE,TurneraItemsSchema,TurneraItem};