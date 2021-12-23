const {User,UsersSchema} = require("./User");
const {Turno,TurnosSchema} = require("./Turno");
const {Profesional,ProfesionalsSchema}= require("./Profesional");
const {Turnera,TurnerasSchema} = require("./Turnera");
const {TurneraItem,TurneraItemsSchema} = require("./TurneraItem");
function setupModels (sequelize){
    
    User.init(UsersSchema,User.config(sequelize));
    Turno.init(TurnosSchema,Turno.config(sequelize));
    Profesional.init(ProfesionalsSchema,Profesional.config(sequelize));
    Turnera.init(TurnerasSchema,Turnera.config(sequelize));
    TurneraItem.init(TurneraItemsSchema,TurneraItem.config(sequelize));

    User.associate(sequelize.models);
    Turno.associate(sequelize.models);
    Profesional.associate(sequelize.models);
    Turnera.associate(sequelize.models);
    TurneraItem.associate(sequelize.models);
    
}

module.exports = setupModels;