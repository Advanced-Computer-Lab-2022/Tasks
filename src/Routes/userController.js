// #Task route solution
const userModel = require('../Models/User');
// const mongoose = require('mongoose');

const createUser = async(req,res) => {
    const{Name, Email, Age, BornIn, LivesIn, MartialStatus, PhoneNumber, Job} = req.body;
    try{
        const user = await userModel.create({Name, Email, Age, BornIn, LivesIn, MartialStatus, PhoneNumber, Job});
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const getUsers = async (req, res) => {
    const users = await userModel.find({}).sort({createdAt: -1})
  
    res.status(200).json(users)
  }

module.exports = {createUser, getUsers};