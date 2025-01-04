const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize')

// Config
    //Template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars')

    //Conexão com o banco de dados sql
    const sequelize = new Sequelize('nodejs', 'root', '', {
        host: "localhost",
        dialect: 'mysql'
    });
    sequelize.authenticate().then(function(){
        console.log("conectado com sucesso!")
    }).catch(function(erro){
        console.log("Falha ao conectar " + erro)
    })


app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});