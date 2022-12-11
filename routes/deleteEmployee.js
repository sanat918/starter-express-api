
const express=require('express')
const { body, validationResult } = require('express-validator');
const router=express.Router();
const User=require('../models/User')


//create a user
router.delete('/',  async(req,res)=>{

    
    //Delete Employee
    try{
      let user= await User.deleteOne({email:req.body.email});

   //Creating a Employee
   if(user)
   {
  res.json(user)}
  }
    
    catch(error){
      res.json(error.message)
      res.status(500).send("Something went wrong") 
    }
   

})


module.exports=router
