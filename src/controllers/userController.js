const BooksModel = require("../models/BooksModel")
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
//assignment 

const CreateBooks= async function(req,res){
    let Books=req.body 
    let saveBooks=await BooksModel.create(Books); 
    res.send({msg:saveBooks});
}

const getBooks=async function(req,res){
    let AllBooks=await BooksModel.find();
    res.send({msg:AllBooks});
}
 

module.exports.CreateBooks=CreateBooks
module.exports.getBooks=getBooks
