const express = require('express');
//linking module -1
const abc = require('../introduction/intro')
//linking module -2
const dat=require('../util/helper.js')
//linking module -3
const valid=require('../validator/formatter.js')
// let lodash = require("lodash");

//linking module -4
let lodash=require('lodash')

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

    //module -4
    const array=["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"]
    const result =lodash.chunk(array,3);
    console.log("the output for the months name:-- ")
    console.log(result);
    // res.send('My second ever api!')

    const arr=[1,3,5,7,9,11,13,15,17,19,];
    const result1=lodash.tail(arr);
    console.log(result1);

    //duplicate arrays
    let union=lodash.union([1,2,3,1,2],
        [2,3,6,5,8,2,4],
        [2,3,2,45,76,6],
        [3,4,5,98,56,12],[2,3,4,6,8,9,0,6]);
        console.log(union);

    //objects
    let result2=lodash.fromPairs([["horror","The Shining"],
    ["drama","Titanic"],
    ["thriller","Shutter Island"],
    ["fantasy","Pans Labyrinth"]]);
    console.log(result2);




    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason