const publisherModel = require("../models/publisherModel")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const { find } = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if((!(book.author)) || (!(book.publisher))){
       return res.send({status: false, msg:"you must eneter the authorId and publisherId inorder to access"})
   }

   //
   if((!book.publisher)){
    return res.send({status: false, msg:"you must eneter the publisherId "})
}

   //
    const authorValid=await bookModel.findById(book.author);
    if(!authorValid){
        return res.send({status:false, msg:"invalid Author id"})
    }

    //
    const publisherValid=await publisherModel.findById(book.publisher)
        if(!publisherValid){
            res.send({status:false,msg:"invalid ublisherId"});
    } 

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

//populate function in the code
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author publisher')
    res.send({data: specificBook});
}

//updation
const updateBook= async function(req,res){
    //part a
    //find all the books by publishers =penguin and x,
    //update these books - isHardCover =true
    const allPublisher=await publisherModel.find({name:{$in:['Penguin','HarperCoolins']}},{_id: 1});
    res.send({data:allPublisher});
    // const update1=bookModel.updateMany({publisher:allPublisher},{$set:{isHardCover:true}})

// For the books written by authors having a rating
//  greater than 3.5, update the books price by 10
//   (For eg if old price for such a book is 50, new will be 60) 
//    const allAuthor=await authorModel.find({rating:{$gt:3.5}});
//    const update2=await bookModel.updateMany({author:allAuthor},{$inc:{price:10}})

//  res.send({data: [update1,update2]});

}

//exportation
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBook = updateBook
