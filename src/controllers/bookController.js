const publisherModel = require("../models/publisherModel")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const { find } = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if((!(book.author)) || (!(book.publisher))){
       return res.send({status: false, msg:"you must eneter the authorId and publisherId inorder to access"})
   }
    const authorValid=await bookModel.find().select({author:1,_id:0})
    for(let i =0;i<authorValid.lenght;i++){
        if(authorValid[i]!=book.author){
            res.send({status:false,msg:"invalidAuthorId"});
        }
     } 
    const publisherValid=await publisherModel.find().select({publisher:1,_id:0})
    for(let i =0;i<publisherValid.lenght;i++){
        if(publisherValid[i]!=book.publisher){
            res.send({status:false,msg:"invalidpublisher"});
        }
    } 

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
    
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook});
}

//updation
const updateBook= async function(req,res){
    //part a
    //find all the books by publishers =penguin and x,
    //update these books - isHardCover =true
    const allPublisher=await publisherModel.find({name:{$in:['Penguin','HarperCoolins']}});
    const update1=bookModel.updateMany({publisher:allPublisher},{$set:{isHardCover:true}})

// For the books written by authors having a rating
//  greater than 3.5, update the books price by 10
//   (For eg if old price for such a book is 50, new will be 60) 
   const allAuthor=await authorModel.find({rating:{$gt:3.5}});
   const update2=await bookModel.updateMany({author:allAuthor},{$inc:{price:10}})

 res.send({data: [update1,update2]});

}

//exportation
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBook = updateBook
