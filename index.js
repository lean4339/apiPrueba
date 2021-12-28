const fastify = require('fastify')({
    logger:true
  });
const path = require("path");
const auth = require('./plugins/auth');




//REGISTRO DE CORS
fastify.register(require("fastify-cors"),{origin:"*",methods:["GET"]});

//REGISTRO DE MODULOS EN FASTIFY

fastify.register(require("point-of-view"), {
    engine: {
      ejs: require("ejs"),
    },
  });
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', 
  });

//REGISTRO DE ROUTERS 

fastify.register(require("./routes/usersRouter"),{prefix:"/users"});
fastify.register(require("./routes/profesionalsRouter"),{prefix:"/profesionals"});
fastify.register(require("./routes/itemsRouter"),{prefix:"/itemsTurnera"});
fastify.register(require("./routes/turnosRouter"),{prefix:"/turnos"});
fastify.register(require("./routes/turnerasRouter"),{prefix:"/turneras"});

//PAGINA DE INICIO

fastify.get('/',async function (request, reply) {
    
    reply.view("/templates/index.ejs",{saludo:"Hola esto es una api con fastify"});
});

//REGISTRANDO WEB TOKEN

/*fastify.register(require('fastify-jwt'), {
  secret: 'secreto'
})

*/

// REGISTRANDO MI PLUGIN

fastify.register(auth);


//COMIENZO DE LA APPLICACION
const start = async()=>{
    try{
        fastify.listen(3000)
    }catch(error){
        fastify.log.error(error);
        process.exit(1);
        
    }
}
start()

