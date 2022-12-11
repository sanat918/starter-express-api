
const express=require('express')
const { body, validationResult } = require('express-validator');
const router=express.Router();
const User=require('../models/User')



//create a user
router.get('/',async(req,res)=>{
    
  try{
  //Fetching all Employee list
  let list=await User.find()
    res.json(list)
    }
  
    catch(error){
      res.json(error.message)
      res.status(500).send("Something went wrong") 
    }
   

})


module.exports=router
