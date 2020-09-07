const vegetables=require('../models/vegetable_master')
const multer = require('multer')
const sharp=require('sharp');


const upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})
const vegetable_details = async(req,res)=>{
    try{
        if(req.query.id)
        {
        let data=await vegetables.findOne({id:req.query.id},{is_available:1,id:1,name:1,hindi_name:1,is_green:1,one_liner:1,description:1,variants:1,category:1,pics:1});
       return  res.send(data);
        }

        let data=await vegetables.find({},{is_available:1,id:1,name:1,hindi_name:1,is_green:1,one_liner:1,description:1,variants:1,category:1});
        res.status(200).send({status:200,data:{
            data:data
        }});
        
   
    }
    catch(err)
    {
        return helper.getErrorResponse(req,res,['Bad request'],400);
    }
}

const save_veg_master=async(req,res)=>{
    try
    {
        req.body['id'] = 'VEG' + '-' + (Math.floor(Math.random() * 10000) + 1) + '-' + req.body.name
        let veg=new vegetables(req.body);
        let data=await veg.save();
        // console,log(data)
        res.status(200).send({msg:"success",id:data.id});

    }
   catch(e)
   {
       console.log(e)
  res.status(400).send({error:e});
   }

}

const upload_image=async(req,res)=>{
    try{
       const buffer = await sharp(req.file.buffer).resize({ width: 60, height: 60 }).png().toBuffer();
       
       
       const data= await vegetables.updateOne({id:req.params.id},{$push:{pics:{pic:req.file.buffer}}});
       
        res.send({msg:'image uploaded'});
        }
        catch(e)
        {
            res.status(400).send(e);
        }

}

const get_image=async(req,res)=>{
    try{
    const data= await vegetables.findOne({id:req.params.id}); 
    if(!data)
    {
    throw new Error()
    }
    res.set('Content-Type', 'image/png')
    res.send(data.pics[0].pic);
    }

    catch(e)
    {
        res.status(404).send(e)
    }
}

const add_varient=async(req,res)=>{
    try{
        
        
        
        const data= await vegetables.updateOne({id:req.params.id},{$push:{variants:req.body}});
        
         res.send({msg:'varient added'});
         }
         catch(e)
         {
             res.status(400).send(e);
         } 
}
const change_availability=async(req,res)=>{
    try{
        const data= await vegetables.updateOne({id:req.body.id},{$set:{is_available:req.body.is_available}}); 
        if(!data)
        {
        throw new Error()
        }
        
        res.status(200).send({status:200,data:{msg:"data updated"}});
        }
    
        catch(e)
        {
            res.status(400).send({msg:'bad request'});
        } 
}
const edit_varient=async(req,res)=>{
    try{
        if(req.query.action=='mrp'){
    const data= await vegetables.updateOne({id:req.body.id,"variants._id":req.body.varient_id},{$set:{"variants.$.varient.mrp":req.body.mrp}}); 
    return res.send({msg:"updated"})
        }

        else if(req.query.action=='is_available')
        {
            const data= await vegetables.updateOne({id:req.body.id,"variants._id":req.body.varient_id},{$set:{"variants.$.varient.is_available":req.body.is_available}}); 
            return res.send({msg:"updated"}) 
        }
        else if(req.query.action=='preselected')
        {
            const data= await vegetables.updateOne({id:req.body.id,"variants._id":req.body.varient_id},{$set:{"variants.$.varient.preselected":req.body.preselected}}); 
            return res.send({msg:"updated"}) 
        }
        else
        {
           res.status(400).send({msg:"bad request"});
        }
    }
    catch(e)
    {
   res.status(500).send({msg:"error"});
    }
}

const edit_vegetable=async(req,res)=>{
    try{
        const data= await vegetables.updateOne({id:req.body.id},{$set:req.body}); 
        if(!data)
        {
        throw new Error()
        }
        
        res.status(200).send({status:200,data:{msg:"data updated"}});

    }
    catch(e)
    {
       res.status(400).send({status:400,msg:"bad request"});
    }
}
module.exports={vegetable_details,upload_image,upload,save_veg_master,get_image,add_varient,edit_varient,change_availability,edit_vegetable}