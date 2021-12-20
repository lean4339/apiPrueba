const {Product,ProductsSchema} = require("./Product");
const {User,UsersSchema} = require("./User");
function setupModels (sequelize){
    Product.init(ProductsSchema,Product.config(sequelize));
    User.init(UsersSchema,User.config(sequelize));
}

module.exports = setupModels;