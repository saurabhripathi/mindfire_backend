const jsonwebtoken= require('jsonwebtoken');
const userdetails =require('../models/userdetails')
const tokenverify=async(req,res,next)=>{
    try{
    const token=req.header('Authorization');
   const decode_id= jsonwebtoken.verify(token,"shakti");
   const user= await userdetails.findOne({_id:decode_id,'tokens.token':token});
 
   if(!user)
   {
      throw new Error(); 
   }
   req.token=token;
   req.user=user;
   next();
    }

    catch(e)
    {
res.status(401).send({status:401,message:"unauthorize request"})
    }
}

module.exports=tokenverify