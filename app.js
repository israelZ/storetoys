var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose =require('mongoose');
var bodyParser=require("body-parser")
var multer = require("multer");
var express_fileupload=require('express-fileupload')
var cloudinary = require('cloudinary');
// var passport =require("passport")
var session = require('express-session');
var io = require('socket.io').listen(server);




// view engine setup
var app = express();
var secret='StorToys'
app.use(express.static(path.join(__dirname,'front/dist/front')))
app.use(session({resave:true, saveUninitialized:true, secret: secret}))
app.use(bodyParser())
app.use(bodyParser.json());
// app.use(cors({origin: ["http://localhost:4200"], credentials: true}));
// app.use(express_fileupload());
// app.use(passport.initialize());


// app.use(logger('dev'))
// app.use(bodyParser.urlencoded({extended: true}));




//routing
var user=require('./routes/user')
var order=require('./routes/order')
var item=require('./routes/item')
app.use('/user', user);
app.use('/item', item);
app.use('/order', order);
// var chat=require('./routes/chat')
// app.use('/chat', chat);





//Conction DataBase MongoDB Atals
mongoose.connect('mongodb+srv://sarawel20:a2b4c6d8@toys-tlizs.mongodb.net/store_toys?retryWrites=true&w=majority'
,{ useNewUrlParser: true,useUnifiedTopology: true }).then(console.log('DB is conectet ...')).catch(err=>console.log(err))
//require Schema of DB's
require('./models/user');
require('./models/item');
require('./models/order');






cloudinary.config({ 
  cloud_name: 'dvd8gmxgd', 
  api_key: '179979221292518', 
  api_secret: 'I0RHqeGogJVdiwjJTDE5fd3Z2h0' 
});





// singup from store toys
app.post('/singup',(req,res)=>
{
  
  var users =mongoose.model('users')
  
  var user={
    type:'user',
    name:req.body.name,
    family:req.body.family,
    password:req.body.password,    
    email:req.body.email,
    city :req.body.city,
    address:req.body.address,
    gender:req.body.gender,
    phone:req.body.phone,
    country:req.body.country,
    date:req.body.date,
    active:true
  }

  // seve session of user
  req.session.user=result;  

  new users(user).save().then(data=> res.send(user)).catch(error=>res.send(error))
})


app.post('/singin',(req,res)=>
{   

  mongoose.model('users').find({name:req.body.name,password:req.body.password},(err,result)=>
  {
    if(result.length==1)
    {  
      // seve session of user
      req.session.user=result;  
      res.send(result[0])
    }
    else
    {
      res.status(500).send("The user or password is incorrect") 
    }
  }).catch(()=>res.status(500).send("error occured"))
})


app.get('/logged_in',(req,res)=>
{   
  req.session.user ? res.status(200).send({loggedIn:req.session.user}) : res.status(200).send({loggedIn: false});     
})


/**
 * Log the user out of the application.
 */
app.delete('/logout', (req, res) => {
  
  req.session.destroy((err) => {
    if (err) 
    {
      res.status(500).send('Could not log out.');
    } else 
    {
      res.status(200).send({});
    }
  });
});













// catch 404 and forward to error handlerng 
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
 // res.render('error');
});

var  server =app.listen(5000,()=>
{
  console.log(`Runing on port 5000 ...`)
})




// var io = require('socket.io').listen(server);

// io.on('connection',(socket)=>{

//   console.log('new connection made.');


//   socket.on('join', function(data){
//     //joining
//     socket.join(data.room);

//     console.log(data.user + 'joined the room : ' + data.room);

//     socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
//   });


//   socket.on('leave', function(data){
  
//     console.log(data.user + ' left the room : ' + data.room);

//     socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left this room.'});

//     socket.leave(data.room);
//   });

//   socket.on('message',function(data){

//     io.in(data.room).emit('new message', {user:data.user, message:data.message});
//   })
// });


module.exports = app;