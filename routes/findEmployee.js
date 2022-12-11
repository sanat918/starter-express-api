
const express=require('express')
const { body, validationResult } = require('express-validator');
const router=express.Router();
const User=require('../models/User')


//create a user
router.get('/',[
   body('email','Enter valid Email').isEmail(),
],  async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
  
    //Find any particular user
    try{
      let user= await User.findOne({email:req.body.email});
    if(user)
   {
      return res.json(user)
   }

     res.json({error:"No User Found"})
  
    }
    
    catch(error){
      res.json(error.message)
      res.status(500).send("Something went wrong") 
    }
   

})


module.exports=router
