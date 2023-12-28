const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Data', dataSchema)
module.exports = Product