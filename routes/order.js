var express = require('express');
var mongoose =require('mongoose');
var router = express.Router();



router.post('/buyitems',(req,res)=>{

    const dataBaseMongo=mongoose.model('orders')

  new dataBaseMongo(req.body).save().then(res=>console.log(res)).catch(err=>console.log(err));

})


router.post('/byClient',(req,res)=>{

  console.log(req.body.id)
  // {"idClient._id":req.body.id}
  mongoose.model('orders').find({"idClient._id":req.body.id},function(err,result){ res.send(result)})
    
})


router.post('/by_id',(req,res)=>{
console.log(req.body.id)
  mongoose.model('orders').find({_id:req.body.id},function(err,result){ res.send(result)})
})


router.post('/update',(req,res)=>{
console.log(req.body)

var myquery = {_id:req.body._id};
var newvalues = { $set: {totatToBuy:req.body.totatToBuy,items:req.body.items} };


mongoose.model('orders').updateOne(myquery,newvalues,function(err,result){console.log(result)})
res.sendStatus(200)


})

module.exports = router;
