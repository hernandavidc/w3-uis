const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

const data = [
    {cc: "10986545", name: "Hernan"}, 
    {cc: "12345678", name: "Nat"}, 
    {cc: "41235678", name: "Daniel"}
]

app.get('/', function(req, res){
    res.send('Estamos en el server de Express')
});

app.get('/api/users', function(req, res){
    res.send(data)
});

//CREAR
app.post('/api/users', (req, res) => {
    const user = {
        cc: req.body.cc,
        name: req.body.name
    }

    const { value, error} = validateUser(user);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    data.push(value);
    res.send(value);
})

app.get('/api/users/:cc', function(req, res){
    let user = exitsUser(req.params.cc)
    if(!user) res.status(404).send("No hay registro con esa CC")
    res.send(user)
});

//Update
app.put('/api/users/:cc', (req, res) => {
    let user = exitsUser(req.params.cc)
    if(!user){
        res.status(404).send("No hay registro con esa CC")
        return;
    }

    const { value, error} = validateUser({
        cc: req.body.cc,
        name: req.body.name
    });

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    user.cc = req.body.cc;
    user.name = req.body.name;
    res.send(user);
})

//Delete
app.delete('/api/users/:cc', (req, res) => {
    let user = exitsUser(req.params.cc)
    if(!user){
        res.status(404).send("No hay registro con esa CC")
        return;
    }

    const indexUser = data.indexOf(user);
    data.splice(indexUser, 1);
    res.send(user);
})

app.listen(5000, () => {
    console.log("Servidor de express corriendo en el puerto 5000");
})

function exitsUser(cc){
    return data.find(u => u.cc === cc)
}

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        cc: Joi.string().alphanum().min(7).required()
    })

    return schema.validate(user);
}