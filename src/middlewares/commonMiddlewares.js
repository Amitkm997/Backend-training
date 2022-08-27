
const userModels=require("../models/userModel")
const productModels=require("../models/productModel")
//const productModels= ("../models/productModel")
const validation= function(req,res,next){
    let valid=req.headers.isfreeappuser
    console.log(valid);
    if(!valid){
       return res.send({status:false,msg:"please provide isFreeAppUser header"})
    }else
        next();
}



//validate userId
const validateUserId=async function(req,res,next){
    let book= req.body;
    // console.log(book);
    let  uservalidation=await userModels.findById(book.userId);//findById(book.publisher)
    let  productvalidation=await productModels.findById(book.productId);
    
    if((!uservalidation)){
      return res.send({status:false,msg:"invalid authorId "})
    }
    if((!productvalidation)){
        return res.send({status:false,msg:"invalid  productId"})
      }
    next();
}
module.exports.validateUserId=validateUserId
module.exports.validation=validation