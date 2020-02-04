const mongo =  require('mongoose');

const UserSchema = new mongo.Schema({
    nome :{
        type :String,
        unique:true,
        },
    preco: String,
    
});


module.exports = mongo.model('produto', UserSchema);
