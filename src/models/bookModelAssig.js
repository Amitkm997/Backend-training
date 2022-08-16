const mongoose =require('mongoose');

const BookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        require:true
    },
    
        indianPrice:String,
        EuropeanPrice:String,
    
    year:{
        type:Number,
        default:2021
    },
    tags:[String],

        authourName :String,
        totalPages:Number,
        stockAvailable:Boolean


},{timestamps:true});


module.exports=mongoose.model('BooksData',BookSchema)