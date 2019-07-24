var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser())
const cors = require('cors');

var corsOptions = {
  optionsSuccessStatus: 200,
  allowedHeaders:['sessionId','Content-Type'],
  exposedHeaders:['sessionId'],
  credentials:true,
  origin:['http://localhost:3001'],
}

app.use(cors(corsOptions))


app.get('/checkCookie', function (req, res) {
    let checkCookie = req.cookies["id"];
    console.log("req.cookies", req.cookies);
    if (checkCookie) {
        console.log("cookie")
        res.send(JSON.stringify("1")); 
        
    } else {
        console.log("no cookie")
        res.send(JSON.stringify("0")); 
        
    }
res.end()
})

app.get('/checkLogin', function (req, res) {
    let name = req.query["name"];
    let password = req.query["password"];
    
    if (name === "1@1.mail.com" && password === "111111") {
        res.cookie('id', '1', { maxAge: 11900000000 });
        console.log(name,password)

        res.send(JSON.stringify("1"));
    } else {
        res.send(JSON.stringify("0"));
    }
    
    res.end();
   
})

app.get('/Logout', function (req, res) {
    res.clearCookie("id", "1");

  let ans = "Log out";
  console.log("Log out");
  res.send(ans);
})

app.listen(4000, function () {
    console.log("Server Start");
})