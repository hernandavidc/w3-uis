const hasRol = (...rols) => {
    return (req, res, next) => {
        if(!req.user){
            return res.status(500).json({
                msg: 'Se requiere validar token antes de validar rol'
            })
        }
        
        console.log(req.user);
        if(!rols.includes(req.user.rol)){
            return res.status(401).json({
                msg: `El rol de ${req.user.rol} no en cuentra entre los rols permitidos [${rols}]`
            })
        }

        next();
    }
}

module.exports = {
    hasRol
}