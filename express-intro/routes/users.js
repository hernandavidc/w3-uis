const express = require('express');
const Joi = require('joi');
const routes = express.Router();

const data = [
    {cc: "10986545", name: "Hernan"}, 
    {cc: "12345678", name: "Nat"}, 
    {cc: "41235678", name: "Daniel"}
]

routes.get('/', function(req, res){
    res.send(data)
});

//CREAR
routes.post('/', (req, res) => {
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

routes.get('/:cc', function(req, res){
    let user = exitsUser(req.params.cc)
    if(!user) res.status(404).send("No hay registro con esa CC")
    res.send(user)
});

//Update
routes.put('/:cc', (req, res) => {
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
routes.delete('/:cc', (req, res) => {
    let user = exitsUser(req.params.cc)
    if(!user){
        res.status(404).send("No hay registro con esa CC")
        return;
    }

    const indexUser = data.indexOf(user);
    data.splice(indexUser, 1);
    res.send(user);
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

module.exports = routes;