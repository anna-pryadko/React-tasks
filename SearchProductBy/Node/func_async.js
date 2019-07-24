const express = require('express');
var app = express();
const cors = require('cors');
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

module.exports.getProd=()=>{
    return new Promise(function(resolve,reject){
    con.query(`SELECT * FROM Products`, function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

module.exports.searchProd1=()=>{
    return new Promise(function(resolve,reject){
    con.query(`SELECT * FROM Products WHERE Price<100`, function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

module.exports.searchProd2=()=>{
    return new Promise(function(resolve,reject){
    con.query(`SELECT * FROM Products WHERE Price>300`, function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

module.exports.searchProd3=(id)=>{
    return new Promise(function(resolve,reject){
    con.query(`SELECT * FROM Products WHERE Id=${id}`, function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

module.exports.insProd=()=>{
    return new Promise(function(resolve,reject){
    con.query(`INSERT INTO Products (Name,Description,SubCategoryId,Price,CategoryId) VALUES ('Hat Hat','Hat',1,80,1)`, function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

module.exports.delProd=()=>{
    return new Promise(function(resolve,reject){
    con.query(`DELETE FROM Products WHERE Id=8`, function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

module.exports.updProd=()=>{
    return new Promise(function(resolve,reject){
    con.query(`UPDATE Products SET Price=600, WHERE Id=7`, function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}
