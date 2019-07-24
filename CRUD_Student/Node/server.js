const express = require('express');
var app = express();
const cors = require('cors');
//const searchStudents = require('./SearchStudents.js');

var corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    port: 8889,
    user:"root",
    password:"root",
    database:"students"
});

app.get('/getStudents',(req,res)=>{

    con.query(`SELECT * FROM all_student`, function(err,result,fields){
      if (err) throw err;
    
      res.send(result);
  });
   
})

app.get('/searchStudents',(req,res)=>{
  
   id=req.query.id;
   con.query(`SELECT * FROM all_student WHERE id='${id}'`, function(err,result,fields){
     if (err) throw err;
    
     res.send(result);
 });
  
})

app.get('/insertStudents',(req,res)=>{
  name = req.query.name;
  age = req.query.age;
  mail = req.query.mail;

  con.query(`INSERT INTO all_student (name,age,mail) VALUES ('${name}','${age}','${mail}')`, function(err,result,fields){
    if (err) throw err;
    // res=result;
    console.log(JSON.stringify(result));
    
    res.send(result);
});

})

app.get('/saveStudents',(req,res)=>{
  name = req.query.name;
  age = req.query.age;
  mail = req.query.mail;
  id = req.query.id;

  con.query(`UPDATE all_student SET name='${name}',age='${age}',mail='${mail}' WHERE id='${id}'`, function(err,result,fields){
    if (err) throw err;
    // res=result;
    //console.log(JSON.stringify(result));
    
    res.send(result);
});

})

app.get('/deleteStudents',(req,res)=>{
  
  id = req.query.id;

  con.query(`DELETE FROM all_student WHERE id='${id}'`, function(err,result,fields){
    if (err) throw err;
    // res=result;
    console.log(JSON.stringify(result));
    
    res.send(result);
});

})

app.listen(5000);