const express = require("express");
const app = express();




app.get("/", function(req, res){
    res.send("SEJA BEM VINDO AO MEU APP!");
});

app.get("/ola/:nome", function(req, res){
    res.send(`<h1> Olá ${req.params.nome}, Tudo bem?!</h1>`);
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
});