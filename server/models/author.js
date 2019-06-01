const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//make a model schema called authorSchema
const authorSchema=new Schema({
  //autumatically generate a unique id, so we don't have to define an id field
  name:String,
  age:Number
});
module.exports=mongoose.model('Author',authorSchema);
