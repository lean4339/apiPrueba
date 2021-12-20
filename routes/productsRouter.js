module.exports =  async function(fastify,options){
    fastify.get("/",(request,reply)=>{
        const saludo = "Hola desde el root";
        reply.view("/templates/index.ejs",{saludo})
    })
    fastify.get("/:id",(request,reply)=>{
        reply.send(`su id es: ${request.params.id}`);
    });
}