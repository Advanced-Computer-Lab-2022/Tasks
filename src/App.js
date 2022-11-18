// External variables
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//Check db connection links in README file
const MongoURI = 'mongodb+srv://Hadwa:hadwa1996@cluster0.hpstsct.mongodb.net/?retryWrites=true&w=majority' ;
const {createUser, getUsers, createBlog, filterBlog, editBlog, getBlogs}= require('./Controller/userController')


//App variables
const app = express();
app.use(cors());
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
app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
  });

app.use(express.json())
app.post("/addUser",createUser);
app.get('/users', getUsers);

app.get('/blogs', getBlogs);
app.post("/addBlog",createBlog);
app.get('/filter',filterBlog);
// TODO : add the editBlog route here

/*
                                                    End of your code
*/
