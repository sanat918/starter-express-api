
const express=require('express')
const { body, validationResult } = require('express-validator');
const router=express.Router();
const app = express();
const User=require('../models/User')


//create a user
router.post('/',[
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
    if(user)
   {
      return res.status(400).json({error:"Sorry this user already exist"})
   }

   //Creating a Employee
   user=await User.create({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role
    })
    res.json(user)
    }
    
    catch(error){
      res.json(error.message)
      res.status(500).send("Something went wrong") 
    }
   

})


module.exports=router
