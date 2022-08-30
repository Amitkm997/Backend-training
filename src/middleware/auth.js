const jwk=require('jsonwebtoken')
// const jwt = require("jsonwebtoken");

const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
      let token = req.headers["x-auth-token"];
      if(!token) return res.send({status:false,msg:"token must be present"})
       let jwkdecoder=jwk.verify(token,"functionup-thorium")
       if(!jwkdecoder){
            res.status("403").send({staus:false,msg:"this token is invalid"})
       }
       req.loggedInUser=jwkdecoder.userId
    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let userToBeModified = req.params.userId//user access userId 
    //let userloggedin = jwkdecoder.userId//decorder userId
    if(userToBeModified!==req.loggedInUser){
     res.send({status:false,msg:"userLoggedIn is not allowed "})
    }
     next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise