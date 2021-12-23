const {models} = require("../db/sequelize");

class TurneraItemServices {
    constructor(){

    }
    async find (){
        const item = await models.TurneraItem.findAll();
        return  item;

    }
    async findOne(id){
        const item = await models.TurneraItem.findByPk(id);
        if(item){
            return item;
        }
        else{
            return "item no encontrado";
        }
    }
    async create(idTurnera,idTurno){
        console.log(idTurno);
        const item = await models.TurneraItem.create({
            idTurnera,
            IdTurno: idTurno
        });
        return item;

    }
    async update(id,idTurnera,idTurno){
        const item = await models.TurneraItem.findOne(id);
        if(item){
            item.update({
                idTurnera,
                idTurno
            });
            return turneraItem
        }else{
            return "No existe la turnera buscada";
        }
       
    }
    async delete(id){
        const item = await models.TurneraItem.findOne({
            where: {id:id}
        });
        if(item){
            item.destroy()
            return `Turno con id: ${id} eliminada`;
        }
        else{
            return `Turno con id: ${id} no encontrado`;
        }
    }
}
module.exports = TurneraItemServices;