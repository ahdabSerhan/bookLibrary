const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookSchema=new Schema({
  //autumatically generate a unique id, so we don't have to define an id field
  name:String,
  genre:String,
  authorId:String
});
module.exports=mongoose.model('Book',bookSchema);
