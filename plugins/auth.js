
const fp = require("fastify-plugin")
const jwt = require("fastify-jwt");

module.exports = fp(async(fastify,options,next)=>{
    fastify.register(jwt,{secret:"secreto"});

    fastify.decorate("auth",async(request,reply)=>{
        try {
            await request.jwtVerify();
        } catch (error) {
            reply.send(error);
        }
    })
    next()
})

