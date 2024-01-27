// npm init -y
// npm i express
//npm i mongoose

const fs = require("node: fs")
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000

const User = require("./Model/user")
const { readFileSync } = require("fs")

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27017/EcommerceDB").
then(()=>{
    console.log("Database Connected");
}).catch((e)=>{
    console.log(e)
    console.log("Database can't be connected!!");
})
app.post("/", async(req, res)=>{
    const userData = new User(req.body)
    await userData.save()
    let a= fs.readFileSync("index.html")
   res.send(a.toString())
})

app.get("/",(req, res)=>{
   let a= fs.readFileSync("index.html")
   res.send(a.toString())
})
app.listen(port, ()=>{
    console.log("App running on port:", port);
})

