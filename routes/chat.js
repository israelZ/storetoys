var express = require('express');
var router = express.Router();
var app = require('../app');

// var io = require('socket.io').listen(app.server);


// io.on('connection',(socket)=>{

//     console.log('new connection made.');


//     socket.on('join', function(data){
//       //joining
//       socket.join(data.room);

//       console.log(data.user + 'joined the room : ' + data.room);

//       socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
//     });


//     socket.on('leave', function(data){
    
//       console.log(data.user + 'left the room : ' + data.room);

//       socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left this room.'});

//       socket.leave(data.room);
//     });

//     socket.on('message',function(data){

//       io.in(data.room).emit('new message', {user:data.user, message:data.message});
//     })
// });


module.exports = router;
