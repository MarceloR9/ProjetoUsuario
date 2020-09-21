// Define a string de conexão com o banco de dados

module.exports = {
    development = {
        database = {
            host = "root",
            port = 3306,
            name = DB_Usuario,
            dialect = "mysql",
            user = "root",
            password = "elenijose1997",

        }
    },
    production = {
        database = {
            host = process.env.DB_HOST,
            host = process.env.DB_PORT
        }
    }
}