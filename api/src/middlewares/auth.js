const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')

module.exports = (req,res,next)=>{

    const authHeader = req.headers.authorization;

    if(!authHeader)
    return res.status(401).send({error: 'No token provided' })

    const parts = authHeader.split(' ');

    if(!parts.length===2)
    return res.status(401).send({erro: 'Token error'});

    const [ sheme, token ] = parts;

    if(!/^Bearrer$^/i.test(sheme))
    return res.status(401).send({error : 'Token malformatted'});

    jwt.verify(token, authConfig.secret, (err, decoded)=> {
        if(err)
        return res.status(401).send({error : 'token invalid'})

        req.userId = decoded.id
        return next();
    })
    
    
    
};