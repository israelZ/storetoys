var express = require('express');
var mongoose =require('mongoose');
var router = express.Router();

router.get('/all_user',(req,res)=>
{
  mongoose.model('users').find({$or:[{type:'worker'},{ type: 'user'}] },
  function(err,result)
  { 
    res.send(result);
  })
})

router.post('/all_by_type_user',(req,res)=>
{
  mongoose.model('users').find({$or:[req.body] },function(err,result){ res.send(result);})
})


router.post('/getById',(req,res)=>
{
  mongoose.model('users').find({_id:req.body.id},function(err,result){res.send(result)})
})

router.post('/update',(req,res)=>
{

  var myquery = {_id:req.body._id};
  var newvalues = { $set: {name: req.body.name,family:req.body.family,email:req.body.email,city:req.body.city,password:req.body.password} };
  mongoose.model('users').update(myquery,newvalues,function(err,result){res.sendStatus(200)})

})

module.exports = router;
