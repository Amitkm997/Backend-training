const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
//assignment 2(whether forecast)
const weatherController=require("../controllers/weatherController")
const memsController=require("../controllers/memsController");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
//assignment 1
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/vacccineByDistricId",CowinController.getDistritVaccination);


//assignment 2(whether forecast)
router.get("/weather/getWeather",weatherController.getWeather);


//memes assignment
router.post("/memes/getMemes",memsController.memsController1);


module.exports = router;