const express = require('express');
var app = express();
const cors = require('cors');
const searchProducts = require('./SearchProducts.js');

var corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

app.get('/searchProducts',(req,res)=>{
    p = req.query.price;

    let result = searchProducts.searchProdFun(p);

    res.send(result);
})

app.listen(5000);