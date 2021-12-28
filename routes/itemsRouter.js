const TurneraItemService = require("../services/turneraItemServices");
const service = new TurneraItemService();
const schema = require("../schemas/turneraItemSchema");

module.exports =  async function(fastify,options){
    fastify.get("/", async (request,reply)=>{
        await fastify.auth(request,reply);
        const turnos = await service.find();
        reply.send({turnos});
    })
    fastify.get("/:id", async (request,reply)=>{
        await fastify.auth(request,reply);
        const {id} = request.params;
        const turno = await service.findOne(id);
        reply.send({turno});
    });
   fastify.post("/",schema ,async (request,reply)=>{
        await fastify.auth(request,reply);
        const {idTurnera,idTurno} = request.body;
        const items = await service.create(idTurnera,idTurno);
        reply.send({items});
    });
    fastify.put("/:id",schema, async (request,reply)=>{
        await fastify.auth(request,reply);
        const {id} = request.params;
        const {idProfesional,cantidad} = request.body;
        const turnera = await service.update(id,idProfesional,cantidad);
        reply.send({turnera});

    });
    fastify.delete("/:id", async (request,reply)=>{
        await fastify.auth(request,reply);
        const {id} = request.params;
        const deleted = await service.delete(id);
        reply.send({deleted});
    });
}