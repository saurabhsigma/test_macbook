// console.log("hello world")

const express = require("express");
const  app = express();
const port = 3000;

app.use(express.json())

function cube(n){
    return n*n*n;
}

app.get("/",(req,res)=>{
    // res.send("hi there")
    const n = req.query.n;
    const ans = cube(n);
    res.json({
        ans
    });
})

app.listen(port)