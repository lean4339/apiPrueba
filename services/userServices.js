const {models} = require("../db/sequelize");

class userService{
    constructor (){

    }
    async find (){
        const users = await models.User.findAll();
        return users;

    }
    async findOne(id){
        const user = await models.User.findByPk(id,{
            include: [{association: "UserTurnos",include:"turneras"}],
        });
        if(user){
            return user;
        }else{
            return "no existe usuario";
        }
    }
    async create(name,username,email,password,url_image){
        const user = await models.User.create({
            name,
            username,
            email,
            password,
            url_image,
        });
        return user;
    }
    async update(id,name,username,email,password,url_image){
        const user = await models.User.findOne({
            where:{id:id}
        });
       if(user){
        const update = user.update({
            name,
            username,
            email,
            password,
            url_image,

        });
        return update;
       }
       else{
           return "no existe usuario";
       }
    }
    async delete(id){
        const user = await models.User.findOne({
            where: {id:id}
        });
        if(user){
            user.destroy()
            return `Usuario con id: ${id} eliminado`;
        }
        else{
            return `Usuario con id: ${id} no encontrado`;
        }
    }
}
module.exports = userService;