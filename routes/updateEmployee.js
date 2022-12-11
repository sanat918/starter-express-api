
const express=require('express')
const { body, validationResult } = require('express-validator');
const router=express.Router();
const User=require('../models/User')


//create a user
router.put('/',[
   body('name','Enter a Valid Name').isLength({ min: 5 }),
   body('email','Enter valid Email').isEmail(),
   body('role','Enter valid company').isLength({ min: 3 })
],  async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
  
    //checking already user with same email exist
    try{
      let user= await User.findOne({email:req.body.email});
      
   //Updating a Employee
   if(user)
   {
    user=await User.updateOne({"email": req.body.email},{$set:{name: req.body.name,role: req.body.role }})
  res.json(user)
  }
  }
    
    catch(error){
      res.json(error.message)
      res.status(500).send("Something went wrong") 
    }
   

})


module.exports=router
