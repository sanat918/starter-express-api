const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()

const connectToMongo = ()=>{

     const mongoUrl='mongodb://localhost:27017/Employee'
     
    mongoose.connect(mongoUrl,()=>
    {console.log('Connect to DB success')
    console.log(mongoUrl)
    }
    
    )

}

module.exports=connectToMongo;