const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Dev ops demo")
})

module.exports = app