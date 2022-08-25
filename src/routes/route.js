const express = require('express');
const router = express.Router();
<<<<<<< HEAD

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")
=======
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
>>>>>>> 786abc45b56b223f223c9a7b4bba80ab59b0cdd2

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

<<<<<<< HEAD
router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)
=======


>>>>>>> 786abc45b56b223f223c9a7b4bba80ab59b0cdd2

router.post("/createPublisher", publisherController.createpublisher)

<<<<<<< HEAD
router.get("/getPublisherData", publisherController.getPublisherData)

router.post("/createBook", bookController.createBook  )


router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

//
router.put("/updateBook", bookController.updateBook)
=======



// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


const mid1= function ( req, res, next) {
    console.log ("inside GLOBAL MW");
    console.log("Hi I am a middleware named Mid1")
    // logic
    let loggedIn = false

    if (loggedIn== true) { 
        console.log( "OK LOGGED IS IS TRUE NOW")
        next ()
    }
    else {
        res.send ("Please login or register")
    }
}

/*

*/

// e.g. restricted and open-to-all API's can be handled like below now:
router.get('/homePage', mid1, UserController.commonHandler)
router.get('/profileDetails', mid1, UserController.commonHandler)
router.get('/friendList', mid1, UserController.commonHandler)
router.get('/changePassword', mid1, UserController.commonHandler)

router.get('/termsAndConditions',  UserController.commonHandler)
router.get('/register',  UserController.commonHandler, function(req, res){
    console.log('This is last console statement')
    res.send({status: true, msg: "Am ending the cycle."})
})





//router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)



>>>>>>> 786abc45b56b223f223c9a7b4bba80ab59b0cdd2

module.exports = router;