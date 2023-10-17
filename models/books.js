const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({

    ttile:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }

})


module.exports = mongoose.model('Book', BookSchema);