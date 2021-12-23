const turneraItemSchema = {
   schema:{
       body:{
        type: 'object',
        properties: {
            idTurnera:{type: 'number'},
            IdTurno:{type: 'number'},      
        },
        required: ['idTurnera','IdTurno']
       }
   }
}

module.exports = turneraItemSchema;