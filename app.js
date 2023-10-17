const express = require('express');
const mongoose = require('mongoose');

const bookRoutes = require('./route/books');


const app = express();



app.use(bookRoutes)



mongoose.connect('')
    .then(result=>{
        app.listen(6060);
    })
    .catch(err =>{
        console.log(err)
    })
