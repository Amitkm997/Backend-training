const { count } = require("console")
// const { create } = require("domain")
const BooksModels= require("../models/booksModel")
const AuthorModel= require("../models/AuthorsModel")
const booksModel = require("../models/booksModel")
const bookModel = require("../models/bookModel")
const AuthorsModel = require("../models/AuthorsModel")

// const CreateAuthorBooks= async function(req,res){
//     const Booksdata=req.body
//     const  savedBooks=await BooksModels.create(Booksdata);
//     res.send({msg:savedBooks})
// } 


//creat api
const CreateAuthor= async function(req,res){
    const data=req.body
    let authorId=data.author_Id;
    if(!authorId){
        return res.send({status:false,msg:"authorId must be present"});
    }
    const  savedData= await AuthorModel.create(data);
    res.send({msg:savedData});
} 
//2nd problem
const listBooks=async function(req,res){
    const book= await AuthorModel.find({author_name:"Chetan Bhagat"});
    const author= await booksModel.find({ author_id :{$eq:book[0]. author_id}});
    res.send({msg:author})
}
//3rd problem
// find the author of “Two states” and update the book price to 100
const updateBooks=async function(req,res){
    const bookPrice =await booksModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true});
    let authorprice= bookPrice.price;
    let authorUpdate=await AuthorModel.find({author_id:{$eq:bookPrice.author_id}}).select({author_name:1,_id:0});
    res.send({authorUpdate,authorprice});
}
//4th problem

const authorNames=async function(req,res){
    const price= await booksModel.find({price:{ $gte: 50, $lte: 100}});
    const range= price.map(x=>x.author_id);//it is getting all the ids
    const author=await AuthorsModel.find({author_id:range}).select({author_name:1,_id:0});
    res.send({msg:author});
}

// module.exports.CreateAuthorBooks=CreateAuthorBooks;
module.exports.CreateAuthor=CreateAuthor;
module.exports.listBooks=listBooks;
module.exports.updateBooks=updateBooks;
module.exports.authorNames=authorNames;
