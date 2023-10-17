const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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



mongoose.connect('mongodb+srv://eze:Password0@cluster0.b3lqm9f.mongodb.net/Books')
    .then(result=>{
        app.listen(6060);
    })
    .catch(err =>{
        console.log(err)
    })
