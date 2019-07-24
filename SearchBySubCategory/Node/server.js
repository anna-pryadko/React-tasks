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
    database:"Shop"
});

app.get('/getCategories',(req,res)=>{
  
  con.query(`SELECT * FROM Category`, function(err,result,fields){
    if (err) throw err;
  
    res.send(result);
    console.log(result);
});

})

app.get('/getSubCategories',(req,res)=>{
  id=req.query.id;
  console.log("idCat: ",id);
  con.query(`SELECT * FROM Sub_Category WHERE CategoryId=${id}`, function(err,result,fields){
    if (err) throw err;
  
    res.send(result);
    console.log(result);
});

})

app.get('/getProducts',(req,res)=>{
  id=req.query.id;
  console.log("idSubCat: ",id);
  con.query(`SELECT * FROM Products WHERE SubCategoryId=${id}`, function(err,result,fields){
    if (err) throw err;
  
    res.send(result);
    console.log(result);
});

})

app.listen(5000);