const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authconfig = require('../config/auth');
const User = require('../model/user');


function genereiteToken(paramns ={}){
    jwt.sign(paramns, authconfig.secret,{
        expiresIn:86400,
    });
}

 module.exports = {
     async register(req,res)  {
         try {
             const {email}= req.body;
             
             if(!req.body){
                 return res.status(400).json({erro:'Usuario vazio'})
                }
                
                if(await User.findOne({ email })){
                    
                    return res.status(400).json({error: 'User already exists'});
                }
                const user = await User.create(req.body);
            
    user.password = undefined; 
    
    return res.json({
        user,
        token: genereiteToken({id:user.id}),
    });

} catch (err) {
    return res.status(400).json({error: 'Registration failed'})
}
     },
    

 async authenticate(req,res) {

    const {email, password} = req.body;
    
    const user = await User.findOne({email}).select('+password');
    
    if(!user)
    return res.status(400).json({error: 'User not found'});

    if(!await bcrypt.compare(password, user.password)){
       
        user.password = undefined;
        return res.status(400).json({error: 'Invalid password'});
        
    }

    
    return res.json({
        user,
        token:genereiteToken({id: user.id}),
    });
}
}
 