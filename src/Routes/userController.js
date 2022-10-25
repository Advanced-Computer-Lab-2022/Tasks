// #Task route solution
const userModel = require('../Models/User');
const blogModel = require('../Models/Blog');
const { default: mongoose } = require('mongoose');
// const authorModel = require('../Models/Author');
// const mongoose = require('mongoose');

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
  
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        console.log(element.id);
    }
    res.status(200).json(users)
  }

// create blog
const createBlog = async(req,res) => {
    const{title,body,authorId} = req.body;
    try{
        const blog = await blogModel.create({title,body,authorId});
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

// filter blogs by author
const filterBlog = async(req,res) => {
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
   
}


module.exports = {createUser, getUsers, createBlog, filterBlog, editBlog};
