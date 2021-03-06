const {models} = require("../db/sequelize");
const bcrypt = require("bcrypt");

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
        const addresCript = bcrypt.hashSync(password,12);
        console.log(url_image);
        const user = await models.User.create({
            name,
            username,
            email,
            password: addresCript,
            image_url: url_image,
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
    async login (fastify,email,password){
        const user = await models.User.findOne({
            where: {email: email}
        });
        if(user){
            if(bcrypt.compareSync(password, user.password)== true){                
                //FORMA DE BORRAR LA CONTRASEÑA PARA ENVIARSELA AL USUARIO!!!
                delete user.dataValues.password
                const id = user.id;
                const payload = {
                    id: id,                    
                }
                const token = fastify.jwt.sign(payload,{expiresIn: 120});
                return {message: "login success!!", user,token:`Bearer ${token}`};
            }else{
                return `this password is incorrect`
            }
        }else{
            return `user whit email ${email} not exist`
        }
    }
}
module.exports = userService;