const express = require("express");
const app = express();




app.get("/", function(req, res){
    res.send("SEJA BEM VINDO AO MEU APP!");
});

app.get("/sobre", function(req, res){
    res.send("MINHA PAGINA SOBRE");
});

app.get("/blog", function(req, res){
    res.send("BEM VINDO AO MEU BLOG");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
});