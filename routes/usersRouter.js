const UserService = require("../services/userServices");
const service = new UserService()
const schema = require("../schemas/userSchema");

module.exports =  async function(fastify,options){
    
    fastify.get("/", async (request,reply)=>{
        await fastify.auth(request,reply)
        const users = await service.find();
        reply.send({users});
    })
    fastify.get("/:id", async (request,reply)=>{

        await fastify.auth(request,reply)
        const {id} = request.params;
        const user = await service.findOne(id);
        reply.send({user});
    });
    fastify.post("/", schema ,async (request,reply)=>{
        const {name,username,email,password,image_url} = request.body;
        const user = await service.create(name,username,email,password,image_url);
        reply.send({user});
    });
    fastify.put("/:id",schema, async (request,reply)=>{
        const {id} = request.params;
        const {name,username,email,password,url_image} = request.body;

        await fastify.auth(request,reply)
        const user = await service.update(id,name,username,email,password,url_image);
        reply.send({user});

    });
    fastify.delete("/:id", async (request,reply)=>{

        await fastify.auth(request,reply)
        const {id} = request.params;
        const deleted = await service.delete(id);
        reply.send({deleted});
    });
    fastify.post("/login", async (request,reply)=>{
        const {email,password} = request.body;
        const sesion = await service.login(fastify,email,password);
        reply.send({sesion});
    });
}