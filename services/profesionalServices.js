const {models} = require("../db/sequelize");

class ProfesionalService{
    constructor (){

    }
    async find (){
        const profesional = await models.Profesional.findAll({
            include: [{association:"turnos profesional"}]
        });
        return  profesional;

    }
    async findOne(id){
        const user = await models.Profesional.findByPk(id,{
            include: [{association:"turnos profesional",include:"items"}]
        });
        if(user){
            return user;
        }
        else{
            return "usario no encontrado"
        }
    }
    async create(name,username,email,password,url_image){
        const user = await models.Profesional.create({
            name,
            username,
            email,
            password,
            url_image,
            profesionId: 1
        });
        return user;
    }
    async update(id,name,username,email,password,url_image){
        const profesional = await models.Profesional.findOne({
            where:{id:id}
        });
        if(profesional){
            const changed = await profesional.update({
                name,
                username,
                email,
                password,
                url_image,
    
            });
            return changed;
        }else{
            return "No existe id"
        }
    }
    async delete(id){
        const profesional = await models.Profesional.findOne({
            where: {id:id}
        });
        if(profesional){
            profesional.destroy()
            return `Usuario con id: ${id} eliminado`;
        }
        else{
            return `Usuario con id: ${id} no encontrado`;
        }
    }
}
module.exports = ProfesionalService;