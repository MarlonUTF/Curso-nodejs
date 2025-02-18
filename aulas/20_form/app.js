const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Post = require('../../models/Post')

// Configurações

    // Template engine
        app.engine(
            "handlebars",
            handlebars.engine({ defaultLayout: "main" })
        );
        app.set("view engine", "handlebars");
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
// Rotas
    app.get('/', function(req, res) {
        Post.findAll({ raw: true}, {order:[['id', 'DESC']]}).then(function(posts) {
            res.render('home', { posts: posts });
        }).catch(function(error) {
            console.error('Erro ao buscar posts:', error);
            res.status(500).send('Erro ao buscar posts');
        });
    });

    app.post("/cadastrar-postagem", function (req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    });

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("postagem deletada com sucesso!")
        }).catch(function(){
            res.send("Esta postagem não existe!")
        })
    });

// Iniciar servidor
    app.listen(8081, function () {
        console.log("Servidor rodando na URL: http://localhost:8081");
    });
