var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema=new Schema({
    status:String,
    date:Date,
    totatToBuy:Number,
    idClient:{
        _id:String,
        name:String,
        family:String,    
        email:String,
        city :String,},
    items:[{item:{  
            name:String,
            url:String,
            quantity:Number,
            price:Number,
            category:String},
           qut:Number}],
    worker:[{id:String,
           name:String }]

})

mongoose.model('orders',OrderSchema);
