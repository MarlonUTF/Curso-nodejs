const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar " + erro)
})
