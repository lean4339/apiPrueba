const TurneraService = require("../services/turneraServices");
const service = new TurneraService();
const schema = require("../schemas/turneraSchema");

module.exports =  async function(fastify,options){
    fastify.get("/", async (request,reply)=>{
        const turnera = await service.find();
        reply.send({turnera});
    })
    fastify.get("/:id", async (request,reply)=>{
        const {id} = request.params;
        const turnera = await service.findOne(id);
        reply.send({turnera});
    });
   fastify.post("/",schema ,async (request,reply)=>{
        const {idProfesional,cantidad} = request.body;
        const turnera = await service.create(idProfesional,cantidad);
        reply.send({turnera});
    });
    fastify.put("/:id",schema , async (request,reply)=>{
        const {id} = request.params;
        const {idProfesional,cantidad} = request.body;
        const turnera = await service.update(id,idProfesional,cantidad);
        reply.send({turnera});

    });
    fastify.delete("/:id", async (request,reply)=>{
        const {id} = request.params;
        const deleted = await service.delete(id);
        reply.send({deleted});
    });
}