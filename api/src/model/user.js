const mongo =  require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongo.Schema({
    nome :{
        type :String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    type:{
        type:String,
        require: true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});

UserSchema.pre('save', async function(next){
     const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

     next();
 })

const User = mongo.model('User', UserSchema);

module.exports = User;