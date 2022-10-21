const express = require("express");
const app = express();
const data = require("./user.json");

app.use(express.json());


app.get("/clients", function(req, res){
    res.json(data);
});

app.post("/clients", function(req, res){
    const { id, name } = req.body;

    data.push({ id: id, name: name});
    res.json(data);
} );

app.put("/clients", function(req, res){
    const { id, name } = req.body;
    const userMod = data.find(cli => cli.id === id)
    userMod.name = name
    res.json(data);
});

app.delete("/clients", function(req, res){
    const { id, name } = req.body;
 
    delete data[id-1];
    
    
    res.json(data);
});




app.listen(
    3000, function(){console.log("Servidor inicializado");}
)