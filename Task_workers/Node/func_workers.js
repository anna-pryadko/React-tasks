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
      database:"workers"
  });

module.exports.getWorkes=()=>{
    return new Promise(function(resolve,reject){
    con.query(`SELECT * FROM All_workers`, function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

module.exports.insWorkes=(name,mail)=>{
    console.log("func: ",name,mail) 
    return new Promise(function(resolve,reject){
        
    con.query(`INSERT INTO All_workers (name,mail,on_off) VALUES ('${name}','${mail}',0)`, async function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

module.exports.updateOnWorker=(on_off,id)=>{
    return new Promise(function(resolve,reject){
          
    con.query(`UPDATE All_workers SET on_off=${on_off} WHERE id=${id}`, async function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}
