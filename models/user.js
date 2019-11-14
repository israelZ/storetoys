var mongoose = require('mongoose');

var UserSchema=new mongoose.Schema({
    type:String,
    name:String,
    family:String,
    password:String,    
    email:String,
    address:String,
    city :String,
    gender:String,
    phone:String,
    active:Boolean,
    country:String,
    date:String
})


mongoose.model('users',UserSchema);

