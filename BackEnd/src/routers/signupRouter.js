const express = require('express');
const signupRouter = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

mongoose.connect("mongodb://localhost:27017/PlantDb");
mongoose.set('useFindAndModify', false);
var db=mongoose.connection;
db.on('error',(error)=>{
  console.log(error);
});
db.once('open',()=>{
  console.log("Success");
});

function router(){

  signupRouter.post('',(req,res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((err,registeredUser) => {
        if(err){
            console.log(err);
        }
        else{
          // res.status(200).send(registeredUser)

          let payload = {subject:user._id}
            let token = jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }

    });
});

signupRouter.post('/login',(req,res)=>{
  let userData = req.body
  User.findOne({email:userData.email},(err,user)=>{
      if(err){
          console.log(err)
      }
      if(!user){
          res.status(401).send('Invalid email!')
      }
      else
      if(user.password!=userData.password){
          res.status(401).send('Invalid password!')

      }
      else{
          let payload = {subject:user._id}
          let token = jwt.sign(payload,'secretKey')
          res.status(200).send({token})

        //  res.status(200).send(user)
      }
  });
});


return signupRouter;
}
module.exports = router;
