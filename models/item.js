var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemSchema=new Schema({
    name:String,
    url:String,
    quantity:Number,
    price:Number,
    category:String,
    description:String
})

mongoose.model('items',ItemSchema);
