
const Produto = require('../model/produto');

module.exports={

    async registrar(req,res){
        try{
            const {nome}= req.body;
            const {preco}= req.body;
        
        if(!req.body){
        return res.status(400).json({erro:'produto vazio'})
        }
        
        if(await Produto.findOne({nome})){
        return res.status(400).json({erro:'produto ja existe'})
        }
        
        const porduto = await Produto.create({
            nome: nome,
            preco: preco
        });
        return res.json({porduto});
        //await porduto.populate("porduto").execPopulate();

        
    }catch(err){
        return res.status(400).json({error: 'Registration failed'})
        }
    }
}