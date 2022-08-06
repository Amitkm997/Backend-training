const express = require('express');
//linking module -1
const abc = require('../introduction/intro')
//linking module -2
const dat=require('../util/helper.js')
//linking module -3
const valid=require('../validator/formatter.js')

const log=require('../logger/logger.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    //module 1
    log.name
    log.logIn()
    //module 2
    dat.printDate();
    dat.printmontht();
    dat.datt();

    //module 3
    valid.trim();
    valid.chagetoLowerCase();
    valid.chagetoUpperCase();


    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason