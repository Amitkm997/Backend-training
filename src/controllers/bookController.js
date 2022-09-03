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

const updateSpecificBooks = async function(req, res) {
    //a)
    // get books by the publioshers - Penguin and HarperCollins
    let requiredPublishers = 
    await publisherModel.find({$or: [{name: "Penguin"},{name: "HarperCollins"}]}, {_id: 1})
    //let books = await bookModel.find().populate('publisher')
    //for
    let requiredPublisherIds = [] 
    for (let i = 0; i < requiredPublishers.length; i++) {
        requiredPublisherIds.push(requiredPublishers[i]._id)
    }

    let updatedBooks = await bookModel.updateMany({publisher : {$in: requiredPublisherIds}}, {isHardCover: true}, {new: true})
    res.send({data: updatedBooks})
}
//exportation
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateSpecificBooks = updateSpecificBooks
