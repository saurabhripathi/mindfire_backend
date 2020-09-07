const bcrypt =require('bcrypt');

const generatehash=async(data)=>{
    try
    {
    const hash = await bcrypt.hash(data,8);
    const result=await match(data,hash);
    console.log(result);
    return hash;
    }
    catch(e)
    {
        return null;
    }
}

const match=async(data,hash)=>{
    try
    {
    const data1=await bcrypt.compare(data,hash);
   return data1;
    }
    catch(e)
    {
        return null
    }
}


module.exports={generatehash,match}