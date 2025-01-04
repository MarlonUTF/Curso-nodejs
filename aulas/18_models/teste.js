const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodejs', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar " + erro)
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.sync({force: true})

// Postagem.create({
//     titulo: "HELLO WORLD",
//     conteudo: "lorem ipsum dolor sit amet"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.TEXT
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.sync({force: true})

Usuario.create({
    nome: "Marlon",
    sobrenome: "Sidnei",
    idade: 17,
    email: "marlon@example.com"
})