const express = require('express');
var app = express();
const cors = require('cors');
const funAsync = require('./func_workers.js');

var corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

app.get('/getWorkes',async (req,res)=>{
  let ans=await funAsync.getWorkes();

  res.send(ans);
  
})

app.get('/insWorkes',async (req,res)=>{
    let name=req.query.name;
    let mail=req.query.mail;
    let ans=await funAsync.insWorkes(name,mail);
    console.log(ans);  
    res.send(ans);
    
  })

  app.get('/updateOnWorker',async (req,res)=>{
    let on_off=req.query.on_off;
    let id=req.query.id;
    console.log(on_off,id);
    let ans=await funAsync.updateOnWorker(on_off,id);
    console.log(ans);  
    res.send(ans);
    
  })

app.listen(5000);