// #Task route solution
const userModel = require('../Models/User');
const blogModel = require('../Models/Blog');
const { default: mongoose } = require('mongoose');
const express = require("express");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
  return jwt.sign({ name }, 'supersecret', {
    expiresIn: maxAge
  });
};

const signUp = async(req,res) => {
    const{name, email, password} = req.body;
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await userModel.create({name : name, email : email,password: hashedPassword});

        const token = createToken(user.name);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}



const getUsers = async (req, res) => {
    const allUsers = await userModel.find({}).sort({createdAt: -1})
    res.status(200).json(allUsers)
  }

// get user by id
const getUserById = async (req, res) => {
    const user = await userModel.findById(req.params.id)
    res.status(200).json(user)
}




module.exports = {signUp,getUsers,getUserById};
