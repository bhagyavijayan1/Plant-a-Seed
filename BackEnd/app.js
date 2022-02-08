const express = require('express');
const mongoose = require('mongoose');
var app = new express();
var bodyParser =require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path=require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

const adminRouter=require('./src/routers/adminRouter')();
const signupRouter=require('./src/routers/signupRouter')();
const plantRouter=require('./src/routers/plantRouter')();


app.use('/uploads', express.static('uploads'));
app.use('/admin',adminRouter);
app.use('/signup',signupRouter);
app.use('/user',plantRouter);


port = process.env.PORT || 5000;


app.get('/',(req,res)=>{
  res.send("hello from server")
});




// mongoose.connect("mongodb://localhost:27017/PlantDb");
// mongoose.set('useFindAndModify', false);
// var db=mongoose.connection;
// db.on('error',(error)=>{
//   console.log(error);
// });
// db.once('open',()=>{
//   console.log("Success");
// });


app.listen(5000,function(){
  console.log('listening to port 5000');
});
