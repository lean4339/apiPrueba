const TurnoService = require("../services/turnoService");
const service = new TurnoService();
const schema = require("../schemas/turnoSchema");

module.exports =  async function(fastify,options){
    fastify.get("/", async (request,reply)=>{
        const turno = await service.find();
        reply.send({turno});
    })
    fastify.get("/:id", async (request,reply)=>{
        const {id} = request.params;
        const turno = await service.findOne(id);
        reply.send({turno});
    });
   fastify.post("/" , schema,async (request,reply)=>{
        const {idUser,horario} = request.body;
        const turno = await service.create(idUser,horario);
        reply.send({turno});
    });
    fastify.put("/:id",schema, async (request,reply)=>{
        const {id} = request.params;
        const {idUser,horario} = request.body;
        const turnera = await service.update(id,idUser,horario);
        reply.send({turnera});

    });
    fastify.delete("/:id", async (request,reply)=>{
        const {id} = request.params;
        const deleted = await service.delete(id);
        reply.send({deleted});
    });
}