const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
//assignment
const bookControllerAssig=require("../controllers/bookControllerAss.js");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

//assignment
router.post("/createBooksAssig",bookControllerAssig.creatBookAssig);
router.get("/getBooksDataAssig",bookControllerAssig.getBooksDataAssig);
//booklist
router.get("/BookList",bookControllerAssig.bookList);
// getBooksInYear
router.post("/getBooksInYear",bookControllerAssig.getBooksInYear);
//getXINRBooks
router.get("/getXINRBooks",bookControllerAssig.getXINRBooks);
// getRandomBooks
router.get("/getRandomBooks",bookControllerAssig.getRandomBooks);
module.exports = router;