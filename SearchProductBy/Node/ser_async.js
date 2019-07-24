const express = require('express');
var app = express();
const cors = require('cors');
const funAsync = require('./func_async.js');

var corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

app.get('/getProducts',async (req,res)=>{
  let ans=await funAsync.getProd();
  res.send(ans);
  
})

app.get('/searchProductsByMax',async (req,res)=>{
    let ans=await funAsync.searchProd1();
    res.send(ans);
    
  })

  app.get('/searchProductsByMin',async (req,res)=>{
    let ans=await funAsync.searchProd2();
    res.send(ans);
    
  })

  app.get('/searchProductsById',async (req,res)=>{
    let searchId=req.query.id  
    let ans=await funAsync.searchProd3(searchId);
    res.send(ans);
    
  })

app.get('/insertProduct',async (req,res)=>{
    let ans=await funAsync.insProd();
    res.send(ans);
    
}) 

app.get('/deleteProduct',async (req,res)=>{
    let ans=await funAsync.delProd();
    res.send(ans);
    
}) 

app.get('/updateProduct',async (req,res)=>{
    let ans=await funAsync.updProd();
    res.send(ans);
    
}) 

// app.get('/getSubCategories',(req,res)=>{
//   id=req.query.id;
//   console.log("idCat: ",id);
//   con.query(`SELECT * FROM Sub_Category WHERE CategoryId=${id}`, function(err,result,fields){
//     if (err) throw err;
  
//     res.send(result);
//     console.log(result);
// });

// })

// app.get('/getProducts',(req,res)=>{
//   id=req.query.id;
//   console.log("idSubCat: ",id);
//   con.query(`SELECT * FROM Products WHERE SubCategoryId=${id}`, function(err,result,fields){
//     if (err) throw err;
  
//     res.send(result);
//     console.log(result);
// });

// })

app.listen(5000);