//create express app
const express = require('express');
const graphqlHTTP=require('express-graphql');
const schema=require('./schema/schema');
const mongoose= require('mongoose');
const cors=require('cors');
const app=express();

//allow- cross-origin requests
app.use(cors());
//connect to mongoDb Daatabase userName : Ahdab Password: blackeyes
//mongodb+srv://Ahdab:<password>@cluster0-axfni.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://Ahdab:blackeyes@cluster0-axfni.mongodb.net/posts?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
  console.log("connected to DB");
})
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}));
console.log("inside the project");
app.listen(4000,()=>{
  console.log("now listining for request on port 4000")
});
//set up graphql
//-install graphql package and express-graphql package
