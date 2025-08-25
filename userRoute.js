import express from 'express'
const Router = express.Router()
// const user = require('../models/userModel');
import userModel from '../models/userModel.js';

//create a new User
Router.post('/', async (req, res) =>{
    try{
        const user = await userModel.create(req.body);
        res.status(201).json(user)
      
    }
    catch (err){
        res.status(400).json({error: err.message});
    }
});
//get all users
Router.get('/', async(req, res)=>{
    try{
        const Users = await userModel.find();
        res.json(Users)
    }
    catch(error){
        res.status(500).json({error: err.message});
    }
});

//update a user by Id
Router.put('/:id', async(req, res)=>{
    try{
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body,{
            new:true});
        res.json(user);
    }
    catch(error){
        res.status(400).json({error: err.message});
    }

});
//delete a user by id
Router.delete('/:id', async(req, res)=>{
    try{
         await userModel.findByIdAndDelete(req.params.id);
        res.json({
            message: 'userDeleted'});
    }
    catch(error){
        res.status(500).json({error: err.message});
    }
})

export default Router


