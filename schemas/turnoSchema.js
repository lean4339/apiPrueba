const turnoSchema = {
    schema:{
        body:{
            type: 'object',
    properties: {
        idUser:{type: 'number'},
        horario: {type: 'string'},       
    },
    required: ['idUser','horario']
        }
    }
}

module.exports = turnoSchema;