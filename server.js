const express = require("express")
const app = express()

const port = 3000;

app.use(express.json())
// function square(n){
//     return n*n;
// }
const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}];

app.get("/", (req,res)=>{
    // res.send("hi therere");
    // const n = req.headers.password;
    // const ans = square(n);
    // res.send("your ans is: " + ans);
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys = johnkidneys.length;
    let numberOfHealthyKidneys = 0;

    for(let i = 0;i<numberOfKidneys;i++){
        if(johnkidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys +1;
        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,numberOfHealthyKidneys,numberOfUnhealthyKidneys
    })

})

app.post("/", (req,res) =>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "done!"
    })
})

app.put("/", function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }

    res.json({
        msg : "done"
    })

})

app.delete("/", function(req,res){
    const newKid = [];
    for(let i =0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKid.push({healthy : true})
        }
    }
    users[0].kidneys = newKid
    res.json({
        msg : "done"
    })
})


app.listen(port);