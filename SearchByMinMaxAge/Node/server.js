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

app.get('/searchStudents',(req,res)=>{
    maxAge = req.query.max;
    minAge = req.query.min;

    //let result = searchProducts.searchStudFun(minAge,maxAge);

    con.query(`SELECT * FROM all_student WHERE age>=${minAge} AND age<=${maxAge}`, function(err,result,fields){
      if (err) throw err;
      // res=result;
      console.log(JSON.stringify(result));
      
      res.send(result);
  });
   
})

app.listen(5000);