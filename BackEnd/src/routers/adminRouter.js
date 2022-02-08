const express = require('express');
const adminRouter = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');



function router(){
  adminRouter.get('',(req,res)=>{
    res.send('From AdminRouter');
  });

  return adminRouter;
}














module.exports=router;
