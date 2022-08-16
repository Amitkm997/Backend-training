const mongoose = require('mongoose');

//assignment 
const bookSchema = new mongoose.Schema({
    bookName :
    {
        type:String,
        require:true,
        unique:true
    },
    AurhorName:String,
    Cotegory:String,
    Year:Number,
    tags:["nodejs","mongoDB"],
    sale:{
        type:String,
        default:20
    },
    prices:{
        indianPrice:String,
        europePrice:String
    }
},{timestamps: true});


module.exports=mongoose.model('books',bookSchema);



// String, Number
// Boolean, Object/json, array