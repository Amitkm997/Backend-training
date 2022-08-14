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
    Year:String
},{timestamp:true});

module.exports=mongoose.model('books',bookSchema);



// String, Number
// Boolean, Object/json, array