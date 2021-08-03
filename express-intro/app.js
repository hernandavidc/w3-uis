const express = require('express')

const app = express();

const data = [{cc: 109865, name: "Hernan"}, {cc: 123456, name: "Nat"}, {cc: 4123, name: "Daniel"}]

app.get('/', function(req, res){
    res.send('Estamos en el server de Express')
});

app.get('/api/users', function(req, res){
    res.send([{cc: 109865, name: "Hernan"}, {cc: 123456, name: "Nat"}, {cc: 4123, name: "Daniel"}])
});

app.get('/api/users/:cc', function(req, res){
    let user = data.find(u => u.cc === parseInt(req.params.cc))
    if(!user) res.status(404).send("No hay registro con esa CC")
    res.send(user)
});

app.listen(5000, () => {
    console.log("Servidor de express corriendo en el puerto 5000");
})