const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName : String,
  lastName : String,
  email : String,
  password : String,

});

module.exports=mongoose.model('user',userSchema,'users');
