require('./Config');
const Cors=require('cors');
const User=require('./user');
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use(Cors())
const studlist1=require('./studlist1')
// name of collection from mongodb


// api fetch to index.js

app.post('/admins',async(req,res)=>{
     let user=new User(req.body)
     let result=await user.save();
     result=result.toObject()
     // to remove password from inspect or database (-password as well)
     delete result.password    
     res.send(result);
 })
// end of signup

app.post('/login',async(req,res)=>{
    if(req.body.email && req.body.password)
    {
        let user = await User.findOne(req.body).select("-password")
        if(user)
             res.send(user)
        else
             res.send("user not found")
    }
    else
             res.send("user not found")
})

// end of login


// start studlist

// for save new stud
app.post('/list',async(req,res)=>{
     let Studadd=new studlist1(req.body)
     let result=await Studadd.save();
     res.send(result);
 })

// for listing student name

app.get("/stulist",async (req,resp)=>{
let stulist= await studlist1.find();
     if(stulist.length>0)
     {
         resp.send(stulist)
     }
     else
     {
         resp.send({result:"No student found"})
     }
 })

//  for updating student

app.put("/stulist/:id", async(req, resp)=>{
     let result=await studlist1.updateOne(
         {_id:req.params.id},
         {
           $set : req.body 
         }
     )
         resp.send(result)
     
 });

 app.get('/stulist/:id',async(req,res)=>{
    let result=await studlist1.findOne({_id:req.params.id});
    console.log(result)
if(result)
    res.send(result)
else
res.send({result:"user not found"})
});

// delete from list

app.delete("/stulist/:id", async (req,resp)=>{
    const result = await studlist1.deleteOne({_id:req.params.id})
    resp.send(result);
});

app.get("/search/:key", async(req, resp)=>{
    let result=await studlist1.find({
        "$or" : [
            {name: { $regex: req.params.key} }, 
            {address: {$regex: req.params.key} },
            {dob: {$regex: req.params.key} },
        ]
    });
 resp.send(result)

})

// search in studlist




 
app.listen(5000);
