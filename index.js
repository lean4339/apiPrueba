const fastify = require('fastify')({
    logger:true
  });
const path = require("path");
const homeSchema = require("./schemas/homeSchema");

fastify.register(require("point-of-view"), {
    engine: {
      ejs: require("ejs"),
    },
  });
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', 
  });

const schema  = {
  querystring: {
      type: 'object',
      properties: {
          saludo: {type: 'string'},
          numero: {type: 'integer'}
      },
      required: ['saludo']
  }
}
fastify.register(require("./routes/productsRouter"),{prefix:"/products"});
fastify.register(require("./routes/usersRouter"),{prefix:"/users"});
fastify.get('/',{schema: schema},async function (request, reply) {
    const {saludo} = request.query || "hola mundito";
    reply.send("hola");
});

const start = async()=>{
    try{
        fastify.listen(3000)
    }catch(error){
        fastify.log.error(error);
        process.exit(1);
        
    }
}
start()