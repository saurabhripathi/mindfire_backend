const axios=require('axios');
const request=require('supertest');
const app =require('../../app')

test('check',async()=>{
   const {data}= await axios.post("http://localhost:3000/api/v1/signup",{name:"shakti",username:"shakti"})
   expect(data.code).toBe(201)
   expect(data.status).toBe("success")
   })

test('second_check',async()=>{
   await request(app).post('/api/v1/signup').send({name:"shakti",username:"shakti"}).expect(201)
})

// test('load_test',async()=>{
//    const apis=[]
//    for(i=0;i<1000;i++)
//    {
//     apis.push(axios.get('http://localhost:3000/api/v1/GET?number=10'))
//    }
//  const result= await Promise.all(apis)
//  console.log(result[0].data);
// })