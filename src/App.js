// External variables
const express = require("express");
const mongoose = require('mongoose');
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//Check db connection links in README file
// const MongoURI = 'mongodb+srv://Hadwa:hadwa1996@cluster0.hpstsct.mongodb.net/?retryWrites=true&w=majority' ;
const MongoURI = 'mongodb://localhost:27017'
const {createUser, getUsers, createBlog, filterBlog, editBlog}= require('./Routes/userController')


//App variables
const app = express();
const port = process.env.PORT || "8000";
const user = require('./Models/User');
// #Importing the userController


// configurations
// Mongo DB
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));
/*
                                                    Start of your code
*/
app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
  });

app.use(express.json())
app.post("/addUser",createUser);
app.get('/users', getUsers);
// #Routing to userController here

app.post("/addBlog",createBlog);
// app.post('/createAuthor',createAuthor);
app.get('/filter',filterBlog);
app.patch('/editBlog/:id',editBlog);


/*
                                                    End of your code
*/
