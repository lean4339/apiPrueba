const ProfesionalService = require("../services/profesionalServices");
const service = new ProfesionalService();
const schema = require("../schemas/profesionalSchema");



module.exports =  async function(fastify,options){
    fastify.get("/", async (request,reply)=>{
        const profesionals = await service.find();
        reply.send({profesionals});
    })
    fastify.get("/:id", async (request,reply)=>{
        const {id} = request.params;
        const profesional = await service.findOne(id);
        reply.send({profesional});
    });
    fastify.post("/",schema ,async (request,reply)=>{
        const {name,username,email,password,url_image} = request.body;
        const user = await service.create(name,username,email,password,url_image);
        reply.send({user});
    });
    fastify.put("/:id",schema, async (request,reply)=>{
        const {id} = request.params;
        const {name,username,email,password,url_image} = request.body;
        const user = await service.update(id,name,username,email,password,url_image);
        reply.send({user});

    });
    fastify.delete("/:id", async (request,reply)=>{
        const {id} = request.params;
        const deleted = await service.delete(id);
        reply.send({deleted});
    });
}