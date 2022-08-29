
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

let loginUsers = async function (req, res,next) {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
  
    // Once the login is successful, create the jwt token with sign function
    // Sign function has 2 inputs:
    // Input 1 is the payload or the object containing data to be set in token
    // The decision about what data to put in token depends on the business requirement
    // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
    // The same secret will be used to decode tokens 
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium-very-very-secret-key"
    );
    //res.setHeader("x-auth-token", token);
    token = req.headers["x-Auth-token"] ;
    if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error. This means the user is not logged in.
     //token = req.headers["x-Auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  }
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

    next()
    // res.setHeader("x-auth-token", token);
    // res.send({ status: true, token: token });
  };

  module.exports.loginUsers=loginUsers