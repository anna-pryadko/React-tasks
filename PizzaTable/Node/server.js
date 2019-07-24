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
    database:"pizza"
});

app.get('/insertPizza',(req,res)=>{
  diameter = req.query.diameter;
  slices = req.query.slices;
  toppings = req.query.toppings;
  price=req.query.price;

  con.query(`INSERT INTO all_pizza (Diameter,Slices,Toppings,Price) VALUES ('${diameter}','${slices}','${toppings}',${price})`, function(err,result,fields){
    if (err) throw err;
    // res=result;
    console.log(JSON.stringify(result));
    
    res.send(result);
});

})


app.get('/getAllPizza',(req,res)=>{

    con.query(`SELECT * FROM all_pizza`, function(err,result,fields){
      if (err) throw err;
    
      res.send(result);
  });
   
})

app.listen(5000);