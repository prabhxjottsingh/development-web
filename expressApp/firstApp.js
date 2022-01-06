const express = require("express");
const app = express();

const port = 80;

app.get("/", (req, res)=>{
    res.send("This is my first express App");
});

app.get("/about", (req,res)=>{
    res.send("This is about page of my first express App");
});

app.listen(port, ()=>{
    console.log(`The application succcessfully started on ${port}`);
});