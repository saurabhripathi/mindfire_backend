const app =require('./app')
// const port=process.env.PORT
const port=8000
app.listen(port,()=>{
    console.log(`up and running ${port}`);
})

module.exports=app

