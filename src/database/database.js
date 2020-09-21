// Define que vamos utilizar o Sequelize como ORM
const Sequelize = require ("sequelize"),

// Define que vamos usar em modo de ambiente ou desenvolvimento
const enviroment = process.env.NODE_ENV |  "development",
const config = require ("../config/config.js")[enviroment];

// Para o sequelize os dados do banco de dados
const Sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host : config.database.host,
        host : config.database.dialect
    }
);
module.exports = sequelize;
