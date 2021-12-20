const homeSchema = {
    querystring: {
        type: 'objet',
        properties: {
            saludo: {type: 'string'},
        },
        required: ['saludo']
    }
}
module.exports = homeSchema;