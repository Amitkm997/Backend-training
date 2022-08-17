const { count } = require("console")
const BookModel= require("../models/bookModelAssig")

const creatBookAssig=async function(req,res){
   let data=req.body;
   const savedBookData=await BookModel.create(data);
   res.send({BookData:savedBookData});
}

const getBooksDataAssig=async function(req,res){
  const getAllBookData=await BookModel.find();
    res.send({msg:getAllBookData});
}

//bookList
const bookList=async function (req,res){
    let getAllBookList= await BookModel.find().select({bookName:1,authourName:1,_id:0});
    res.send({msg:getAllBookList});
}
//getBooksInYear
const getBooksInYear=async function (req,res){
    saal=req.query.year;
    let getBooksInYear1= await BookModel.find({year:saal});
    res.send({msg:getBooksInYear1});
}
//getXINRBooks
const getXINRBooks=async function (req,res){
    // saal=req.query.year;
    let getXINRBooks1= await BookModel.find({$or :[{indianPrice:"100INR"},{indianPrice:"200INR"}]});
    res.send({msg:getXINRBooks1});
}
//getRandomBooks
const getRandomBooks=async function (req,res){
   
    let getRandomBooks1= await BookModel.find({$or :[{stockAvailable:true},{totalPages:{$gt : 500}}]});
    res.send({msg:getRandomBooks1});
}
//getParticularBooks
const getParticularBooks=async function(req,res){
    const getParticularBooks1=await BookModel.find(req.body);
    res.send({BookData:getParticularBooks1});
 }

 //selfPractice
 const selfPractice=async function(req,res){
    pages=req.query.page
    const selfPractice1=await BookModel.find().skip(2*(pages-1)).limit(3);
    res.send({BookData:selfPractice1});

 }
//export
module.exports.creatBookAssig=creatBookAssig;
module.exports.getBooksDataAssig=getBooksDataAssig;
module.exports.bookList=bookList;
module.exports.getBooksInYear=getBooksInYear;
module.exports.getXINRBooks=getXINRBooks;
module.exports.getRandomBooks=getRandomBooks;
module.exports.getParticularBooks=getParticularBooks;
module.exports.selfPractice=selfPractice;