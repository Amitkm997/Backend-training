const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

//assignment 
router.post('/CreateBooks',UserController.CreateBooks);
router.get('/getBooks',UserController.getBooks);


module.exports = router;
