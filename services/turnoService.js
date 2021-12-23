const {models} = require("../db/sequelize");

class TurnoService {
    constructor (){

    }
    async find (){
        const turno = await models.Turno.findAll();
        return  turno;

    }
    async findOne(id){
        const turno = await models.Turno.findByPk(id);
        if(turno){
            return turno;
        }
        else{
            return "No existe turno";
        }
    }
    async create(idUser,horario){
        const turno = await models.Turno.create({
            idUser,
            horario
        });
        return turno;

    }
    async update(id,idUser,horario){
        const turno = await models.Turno.findByPk(id);
        if(turno){
            const changed = await turno.update({
                idUser,
                horario
            });
            return changed;
        }else{
            return "No existe la turno buscada";
        }
       
    }
    async delete(id){
        const turno = await models.Turno.findOne({
            where: {id:id}
        });
        if(turno){
            turno.destroy()
            return `Turno con id: ${id} eliminada`;
        }
        else{
            return `Turno con id: ${id} no encontrado`;
        }
    }
}

module.exports = TurnoService;