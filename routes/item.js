var express = require('express');
var mongoose =require('mongoose');
var router = express.Router();




router.get('/all_items',(req,res)=>
{
  mongoose.model('items').find({},function(err,result){ res.send(result);})
})


router.post('/getById',(req,res)=>
{
  mongoose.model('items').find({_id:req.body.id},function(err,result){ res.send(result)})
})


router.post('/update',(req,res)=>
{
  
  let up_item=JSON.parse(req.body.item);
  if (req.files)
  {
    // image file insert in cloudinary 
    let file=req.files.file;
    let path='./image/'+Math.random()+file.name
    file.mv(path)
    
    cloudinary.uploader.upload(path)
    .then(result=>{
      
      var myquery = {_id:up_item._id};
      var newvalues = { $set: {name:up_item.name,url:result.url,quantity:up_item.quantity,price:up_item.price,Description:up_item.Description} };
      
      mongoose.model('items').updateOne(myquery,newvalues,function(err,result){})
      res.sendStatus(200)

    }).catch(eror=>console.log(eror));
  } else {
    console.log('not file')
    var myquery = {_id:up_item._id};
    var newvalues = { $set: {name:up_item.name,quantity:up_item.quantity,price:up_item.price,Description:up_item.Description} };
    
    mongoose.model('items').updateOne(myquery,newvalues,function(err,result){})
     res.sendStatus(200)
    
  }
  
})


router.post('/add_item', (req, res) => {

  const dataBaseMongo=mongoose.model('item')
  console.log(req.body.item)
  console.log(req.files)

  
  //other prametrs to insert from this item
  var property_image =JSON.parse(req.body.item)

  if (req.files) 
  {
    
    //let property_image=JSON.parse(req.params.property_image);
    
   
    // image file insert in cloudinary 
    let file=req.files.file;
    let path='./image/'+Math.random()+file.name
    file.mv(path)
    cloudinary.uploader.upload(path)
    .then(result=>{
      
      let item=
      {
        name:property_image.name,
        url:result.url,
        quantity:property_image.quantity,
        price:property_image.price,
        category:property_image.category,
        description:property_image.description
      }
      new dataBaseMongo(item).save().then(res=>console.log(res)).catch(err=>console.log(err));
      
    }).catch(eror=>console.log(eror));
  }

 
 res.status(200);
  
});


module.exports = router;
