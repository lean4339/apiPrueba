const {models} = require("../db/sequelize");

class Turnera {
    constructor(){

    }
    async find (){
        const turneras = await models.Turnera.findAll({
            include: ["items"]
        });
        return  turneras;

    }
    async findOne(id){
        const turnera = await models.Turnera.findByPk(id);
        return turnera;
    }
    async create(idProfesional,cantidad){
        const turnera = await models.Turnera.create({
            idProfesional,
            cantidad,
        });
        return turnera;

    }
    async update(id,idProfesional,cantidad){
        const turnera = await models.Turnera.findOne(id);
        if(turnera){
            turnera.update({
                idProfesional,
                cantidad,
            });
            return turnera
        }else{
            return "No existe la turnera buscada";
        }
       
    }
    async delete(id){
        const turnera = await models.Turnera.findOne({
            where: {id:id}
        });
        if(turnera){
            turnera.destroy()
            return `Turnera con id: ${id} eliminada`;
        }
        else{
            return `Turnera con id: ${id} no encontrado`;
        }
    }
}
module.exports = Turnera;