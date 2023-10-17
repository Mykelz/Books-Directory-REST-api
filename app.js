const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


const bookRoutes = require('./route/books');


const app = express();

app.use(bodyParser.json());

app.use( (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
  });

app.use(bookRoutes);



mongoose.connect(process.env.CONNECT)
    .then(result=>{
        app.listen(process.env.PORT);
    })
    .catch(err =>{
        console.log(err)
    })
