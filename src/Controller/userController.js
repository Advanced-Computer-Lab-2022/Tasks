// #Task route solution
const userModel = require('../Models/User');
const blogModel = require('../Models/Blog');
const { default: mongoose } = require('mongoose');

const createUser = async(req,res) => {
    const{name, email} = req.body;
    try{
        const user = await userModel.create({name, email});
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const getUsers = async (req, res) => {
    const users = await userModel.find({}).sort({createdAt: -1})
  
    // for (let index = 0; index < users.length; index++) {
    //     const element = users[index];
    //     console.log(element.id);
    //}
    res.status(200).json(users)
  }

// create blog
const createBlog = async(req,res) => {
    /*
    1- get the title and body and authorId from the request body
    2- create a new blog with the title, body and authorId
    3- send the new blog as a response
    */
    const{title,body,author} = req.body;
    try{
        const blog = await blogModel.create({title,body,author});
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
// get blogs
const getBlogs = async (req, res) => {
    const blogs = await blogModel.find({}).sort({createdAt: -1})
  
    // for (let index = 0; index < blogs.length; index++) {
    //     const element = blogs[index];
    //     console.log(element.id);
    //}
    res.status(200).json(blogs)
  }
// filter blogs by author
const filterBlog = async(req,res) => {
    /*
    1- get the author id from the request query
    2- find all the blogs that have the same author id
    3- send the blogs as a response
    */
    const userId = req.query.userId;
    // check if userId is not empty
    if(userId){
    const result = await blogModel.find({author:mongoose.Types.ObjectId(userId)}).populate('author');
    res.status(200).json(result)
    }else{
        res.status(400).json({error:"userId is required"})
    }
}


const editBlog = async(req, res) => {
   // TODO : edit the blog
   /*
    1- get the blog id from the request params
    2- get the new title and body from the request body
    3- update the blog with the new title and body
    4- send the updated blog as a response
    */
}


module.exports = {createUser, getUsers, createBlog, filterBlog, editBlog, getBlogs};
