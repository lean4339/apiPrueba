const Sequelize = require("sequelize");
const setupModels = require("./models/index");

const sequelize = new Sequelize('postgres://lean:Lean123@localhost:5432/ventas',{
    dialect: "postgres",
    protocol: "postgres"
});
setupModels(sequelize);
sequelize.sync();
module.exports = sequelize;