const Sequelize = require("sequelize");

// Conexão com o banco de dados MySQL
    const sequelize = new Sequelize("postapp", "root", "root", {
        host: "localhost",
        dialect: "mysql",
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

// Teste de conexão
    sequelize
    .authenticate()
    .then(function () {
        console.log("Conectado ao banco de dados com sucesso!");
    })
    .catch(function (erro) {
        console.log("Falha ao conectar ao banco de dados: " + erro);
    });