// const jwk=require('jsonwebtoken')
const jwt = require("jsonwebtoken");

const authenticate = function (req, res, next) {
    //check the token in request header
    //validate this token
    //   let token = req.headers["x-Auth-token"] //let token = req.headers["x-Auth-token"];

     let token = req.headers['x-Auth-token'];
    if (!token) token = req.headers['x-auth-token'];//case senstive
    if (!token) return res.send({ status: false, msg: "token must be present" })
    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
     if (!decodedToken){
   return res.send({ status: false, msg: "token is invalid" });
    }
    req.loggedInUser = decodedToken.userId
    next()
}


const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    let userToBeModified = req.params.userId//user access userId 
    //let userloggedin = jwkdecoder.userId//decorder userId
    if (userToBeModified !=req.loggedInUser) {
        res.send({ status: false, msg: "userLoggedIn is not allowed " })
    }
    next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise